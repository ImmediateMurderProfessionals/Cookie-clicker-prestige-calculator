  *whenGreenFlagClicked() {
    yield* this.askAndWait("What is your prestige?");
    this.stage.vars.myVariable =
      this.toString(
        3 * (this.toNumber(this.answer) * this.toNumber(this.answer)) +
          (3 * this.toNumber(this.answer) + 1)
      ) + "000000000000";
    yield* this.sayAndWait(
      "You need " +
        (this.toString(this.stage.vars.myVariable) +
          " cookies for the next prestige level."),
      8
    );
  }
}
