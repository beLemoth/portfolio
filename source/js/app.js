(function() {
  'use strict';

  var skills = {
    "frontend": {"HTML5":"90","CSS3":"80","JavaScript & jQuery":"70"},
    "backend": {"PHP":"40","mySQL":"20","Node.js & npm":"50", "Mongo.db":"20"},
    "workFlow": {"Git":"40","Gulp":"70","Bower":"70"},

    skillsValue: function() {
      var skillArch = [];
      for (var skillGroup in skills) {
        console.log(skills[skillGroup]);
      }
      return skillArch;
    }

  };

  console.log(skills.skillsValue());





})();