const ispwd = function (cmd) {
  if (cmd === "pwd") {
    process.stdout.write(process.cwd());
    process.stdout.write("\nprompt > ");
  }
};

module.exports = ispwd;
