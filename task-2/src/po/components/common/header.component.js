class HeaderComponent {
  get rootEl() {
    return $(".primary_header");
  }

  get logo() {
    return this.rootEl.$(".app_logo");
  }
}

module.export = HeaderComponent;
