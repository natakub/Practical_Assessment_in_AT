class BaseComponent {
  constructor(rootSelector) {
    this.rootSelector = rootSelector;
  }

  get rootEl() {
    return $(this.rootSelector);
  }

  clearInputs = async (...inputs) => {
    for (const input of inputs) {
      const value = await input.getValue();
      const backspace = "\uE003";

      for (let i = 0; i < value.length; i++) {
        await input.addValue(backspace);
      }
    }
  };
}

module.exports = BaseComponent;
