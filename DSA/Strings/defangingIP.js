function ip(str) {
  // return str.replace(/\./g, "[.]");

  return str.split(".").join("[.]");
}
console.log(ip("192.168.0.1"));
