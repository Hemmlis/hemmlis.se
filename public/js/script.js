(function() {
  var Angles = {
    nrOfAngles: 60,
    angles: [],
    init: function() {
      return this.getAngles() || this.generateAngles().setAngles();
    },
    _generateRandomFloat: function() {
      return (Math.random() * (1.5 + 1.5) - 1.5).toFixed(4);
    },
    generateAngles: function() {
      var angles = [];
      for (var i = 0; i < this.nrOfAngles; i++) {
        angles[i] = {
          name: 'angle-' + i,
          before: this._generateRandomFloat(),
          after: this._generateRandomFloat()
        }
      }
      this.angles = angles;
      return this;
    },
    getAngles: function() {
      var storedAngles = localStorage.getItem('neodev-angles');
      if(!storedAngles) {
        return false;
      }
      this.angles = JSON.parse(storedAngles);
      return this;
    },
    setAngles: function() {
      localStorage.setItem('neodev-angles', JSON.stringify(this.angles));
      return this;
    },
    generateStyles: function() {
      var addStyle = function(angle, i) {
        document.styleSheets[0].insertRule('.angle-' + i + '::after { transform: rotate(' + angle.after + 'deg) !important; }', 'index-max');
        document.styleSheets[0].insertRule('.angle-' + i + '::before { transform: rotate(' + angle.before + 'deg) !important; }', 'index-max');
      };
      this.angles.forEach(addStyle);
      return this;
    }
  }

  Angles.init().generateStyles();

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  var addAngleClass = function(el) {
    el.className += ' angle-' + getRandomInt(0, 60);
  };

  document.querySelectorAll('.complementary').forEach(addAngleClass);

})();
