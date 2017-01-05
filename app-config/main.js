A.app({
  appName: "Hello World",
  appIcon: "heart",
  menuItems: [
    {
      name: "Gifts",
      icon: "gift",
      entityTypeId: "Gift",
    }
  ],
  entities: function(Fields) {
    return {
      Gift: {
        title: 'Gifts',
        fields: {
          item: Fields.text("Item").required(),
          date: Fields.date("Giving Date").required(),
          summary: Fields.text("Summary"),
          datetwo: Fields.date("Due date"),
          isComplete: Fields.checkbox("Completed"),          
          isFriendly: Fields.checkbox("Friendly")          
        }
      }
    }
  }
});
