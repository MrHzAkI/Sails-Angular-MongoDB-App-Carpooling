/**
 * Usage:
 *
 * ```
 * res.emailAddressInUse();
 * ```
 *
 */

module.exports = function emailAddressInUse (){

  // Get access to `resAnnonces`
  // (since the arguments are up to us)
  var res = this.res;

  return res.send(409, 'Email address is already taken by another user.');
};
