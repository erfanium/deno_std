import { ERR_INTERNAL_ASSERTION } from "../_errors.ts";

function assert(value, message) {
  if (!value) {
    throw new ERR_INTERNAL_ASSERTION(message);
  }
}

function fail(message) {
  throw new ERR_INTERNAL_ASSERTION(message);
}

assert.fail = fail;

export default assert;
