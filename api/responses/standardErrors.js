
// note that Objection will return errors with a statusCode property as well

export function InternalError(err, prop) {
  this.statusCode = 500;
  // for some reason, mocha instantiates these without passing an err before the actual instantiation that passes the err properly.  I'm sure there's a proper fix...
  if (err && err.message) {
    this.message = err.message;
    this.stack = err.stack;
  } else {
    this.message = err || 'Internal server error';
    this.stack = (new Error()).stack;
  }
  this.property = prop;
}

InternalError.prototype = Object.create(Error.prototype);
InternalError.prototype.constructor = InternalError;

export function NotFoundError(err, prop) {
  this.statusCode = 404;
  if (err && err.message) {
    this.message = err.message;
    this.stack = err.stack;
  } else {
    this.message = err || 'Not found';
    this.stack = (new Error()).stack;
  }
  this.property = prop;
}

NotFoundError.prototype = Object.create(Error.prototype);
NotFoundError.prototype.constructor = InternalError;

export function ForbiddenError(err, prop) {
  this.statusCode = 403;
  if (err && err.message) {
    this.message = err.message;
    this.stack = err.stack;
  } else {
    this.message = err || 'Forbidden';
    this.stack = (new Error()).stack;
  }
  this.property = prop;
}

ForbiddenError.prototype = Object.create(Error.prototype);
ForbiddenError.prototype.constructor = InternalError;

export function BadRequestError(err, prop) {
  this.statusCode = 400;
  if (err && err.message) {
    this.message = err.message;
    this.stack = err.stack;
  } else {
    this.message = err || 'Bad request';
    this.stack = (new Error()).stack;
  }
  this.property = prop;
}

BadRequestError.prototype = Object.create(Error.prototype);
BadRequestError.prototype.constructor = InternalError;

export function ConflictingRecordError(err, prop) {
  this.statusCode = 409;
  if (err && err.message) {
    this.message = err.message;
    this.stack = err.stack;
  } else {
    this.message = err || 'Conflict';
    this.stack = (new Error()).stack;
  }
  this.property = prop;
}

ConflictingRecordError.prototype = Object.create(Error.prototype);
ConflictingRecordError.prototype.constructor = InternalError;

export function UnauthorizedError(err, prop) {
  this.statusCode = 401;
  if (err && err.message) {
    this.message = err.message;
    this.stack = err.stack;
  } else {
    this.message = err || 'Unauthorized';
    this.stack = (new Error()).stack;
  }
  this.property = prop;
}

UnauthorizedError.prototype = Object.create(Error.prototype);
UnauthorizedError.prototype.constructor = InternalError;

export function TeapotError() {
  this.statusCode = 418;
  this.message = 'I\'m a teapot';
}

TeapotError.prototype = Object.create(Error.prototype);
TeapotError.prototype.constructor = InternalError;

export function EntityTooLargeError() {
  this.statusCode = 413;
  this.message = 'Request Entity Too Large';
}

EntityTooLargeError.prototype = Object.create(Error.prototype);
EntityTooLargeError.prototype.constructor = InternalError;

// Error handler, returns a function that sends the appropriate responses for the above errors

export function sendError(res, reqOriginalUrl, requesterInfo) {
  return (error) => {
    const newError = error;
    newError.userId = checkNestedExists(requesterInfo, 'userId') ? requesterInfo.userId : null;
    newError.orgId = checkNestedExists(requesterInfo, 'organizationId') ? requesterInfo.organizationId : null;
    newError.source = exists(reqOriginalUrl) ? reqOriginalUrl : null;
    newError.statusCode = exists(error.statusCode) ? error.statusCode : 500;

    if (!error.statusCode) {
      res.status(500).json({ code: 500, message: error.message });
    } else {
      res.status(error.statusCode).json({ code: error.statusCode, message: error.message, property: error.property });
    }
    return null;
  };
}

export function handlerError(done) {
  return (err) => {
    console.log(err.stack);
    // logger.error(err.stack);
    done(err);
  };
}
