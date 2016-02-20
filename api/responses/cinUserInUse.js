/**
 * Usage:
 *
 * ```
 * res.emailAddressInUse();
 * ```
 *
 */

module.exports = function cinUserInUse (){

  // Get access to `resAnnonces`
  // (since the arguments are up to us)
  var res = this.res;

  return res.send(410, 'cin User is already taken by another user.');
};
