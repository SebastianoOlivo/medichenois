

function debug(...args) {
  console.log("deb", ...args)
  debugger;
}

export { debug };