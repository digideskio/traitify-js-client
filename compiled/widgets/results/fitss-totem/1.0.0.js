// Generated by CoffeeScript 1.7.1
window.Traitify.ui.resultsFitssTotem = function(assessmentId, selector, options) {
  var Builder, containerWidth, oldOnResize, orientationEvent, phone, stretchSize, supportsOrientationChange, widgetParent, widgetParentCopy;
  Builder = Object();
  if (selector.indexOf("#") !== -1) {
    selector = selector.replace("#", "");
    Builder.main = document.getElementById(selector);
  } else {
    selector = selector.replace(".", "");
    Builder.main = document.getElementsByClassName(selector)[0];
  }
  Builder.partials = Object();
  Builder.partials.make = function(elementType) {
    return document.createElement(elementType);
  };
  Builder.partials.div = function(attributes) {
    var attributeName, div;
    div = this.make("div");
    for (attributeName in attributes) {
      div.setAttribute(attributeName, attributes[attributeName]);
    }
    return div;
  };
  Builder.partials.img = function(attributes) {
    var attributeName, img;
    img = this.make("img");
    for (attributeName in attributes) {
      img.setAttribute(attributeName, attributes[attributeName]);
    }
    return img;
  };
  Builder.partials.personalityType = function(data) {
    var badgeContainer, badgeImage, bar, barContainer, barInner, container, informationContainer, localScore, name, score;
    container = this.div({
      "class": "personality-type"
    });
    this.style.personalityType(container, data);
    badgeContainer = this.div({
      "class": "badge-container"
    });
    this.style.badgeContainer(badgeContainer, data);
    container.appendChild(badgeContainer);
    badgeImage = this.img({
      "class": "badge-image",
      src: data.badgeSrc
    });
    this.style.badgeImage(badgeImage, data);
    badgeContainer.appendChild(badgeImage);
    informationContainer = this.div({
      "class": "information-container"
    });
    this.style.informationContainer(informationContainer, data);
    container.appendChild(informationContainer);
    name = this.div({
      "class": "name"
    });
    name.innerHTML = data.name;
    this.style.name(name, data);
    informationContainer.appendChild(name);
    score = this.div({
      "class": "score"
    });
    this.style.score(score, data);
    localScore = data.score >= 0 ? data.score : "(" + (Math.abs(data.score)) + ")";
    score.innerHTML = localScore;
    informationContainer.appendChild(score);
    barContainer = this.div({
      "class": "row bar-container"
    });
    this.style.barContainer(barContainer, data);
    informationContainer.appendChild(barContainer);
    bar = this.div({
      "class": "bar"
    });
    this.style.bar(bar, data);
    barContainer.appendChild(bar);
    barInner = this.div({
      "class": "bar-inner"
    });
    this.style.barInner(barInner, data);
    bar.appendChild(barInner);
    return container;
  };
  Builder.partials.style = Object();
  Builder.partials.style.personalityTypesContainer = function(node, personalityType) {
    return node.style.width = "25.3em";
  };
  Builder.partials.style.personalityType = function(node, personalityType) {
    node.style.backgroundColor = "#" + personalityType.colorOne;
    node.style.display = "inline-block";
    node.style.marginLeft = "0px";
    node.style.width = "25.3em";
    node.style.height = "5em";
    node.style.verticalAlign = "top";
    node.style.fontFamily = 'Helvetica Neue';
    return node.style.fontWeight = 100;
  };
  Builder.partials.style.badgeContainer = function(node, personalityType) {
    node.style.backgroundColor = "#" + personalityType.colorTwo;
    node.style.width = "5em";
    node.style.height = "5em";
    node.style.display = "inline-block";
    node.style.verticalAlign = "top";
    node.style.textAlign = "center";
    return node.style.paddingLeft = ".1em";
  };
  Builder.partials.style.badgeImage = function(node, personalityType) {
    node.style.width = "3.5em";
    node.style.height = "3.5em";
    node.style.marginTop = ".8em";
    return node.style.marginLeft = ".8em";
  };
  Builder.partials.style.barContainer = function(node, personalityType) {
    node.style.width = "18.5em";
    node.style.height = "1em";
    return node.style.margin = "1em 1em 0em .5em";
  };
  Builder.partials.style.bar = function(node, personalityType) {
    return node.style.height = "1em";
  };
  Builder.partials.style.barInner = function(node, personalityType) {
    node.style.height = "1em";
    node.style.width = "" + (Math.abs(personalityType.score)) + "%";
    node.style.backgroundColor = "#" + personalityType.colorThree;
    if (personalityType.score <= 0) {
      return node.style.float = "right";
    }
  };
  Builder.partials.style.name = function(node, personalityType) {
    node.style.display = "inline-block";
    node.style.marginTop = "7px";
    node.style.marginLeft = "10px";
    node.style.color = "#fff";
    node.style.letterSpacing = "2px";
    node.style.fontSize = "1.4em";
    return node.style.textTransform = "uppercase";
  };
  Builder.partials.style.score = function(node, personalityType) {
    node.style.display = "inline-block";
    node.style.marginTop = "7px";
    node.style.marginRight = "15px";
    node.style.color = "#fff";
    node.style.fontSize = "1.4em";
    node.style.float = "right";
    return node.style.letterSpacing = "1.5px";
  };
  Builder.partials.style.informationContainer = function(node, personalityType) {
    node.style.display = "inline-block";
    node.style.width = "20em";
    return node.style.textAlign = "left";
  };
  Traitify.getPersonalityTypes(assessmentId, function(data) {
    var localData, personalityType, personalityTypesContainer, _i, _len, _ref;
    personalityTypesContainer = Builder.partials.div({
      "class": "personality-type-container"
    });
    Builder.partials.style.personalityTypesContainer(personalityTypesContainer);
    _ref = data.personality_types;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      personalityType = _ref[_i];
      localData = Object();
      localData.badgeSrc = personalityType.personality_type.badge.image_small;
      localData.name = personalityType.personality_type.name;
      localData.score = personalityType.score;
      localData.colorOne = personalityType.personality_type.badge.color_1;
      localData.colorTwo = personalityType.personality_type.badge.color_2;
      localData.colorThree = personalityType.personality_type.badge.color_3;
      personalityTypesContainer.appendChild(Builder.partials.personalityType(localData));
    }
    Builder.main.innerHTML = String();
    return Builder.main.appendChild(personalityTypesContainer);
  });
  phone = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  widgetParent = Builder.main.parentNode;
  containerWidth = widgetParent.offsetWidth;
  if (containerWidth > 10) {
    widgetParentCopy = widgetParent.cloneNode(true);
    widgetParentCopy.style.visibility = "hidden";
    widgetParentCopy.style.display = "block";
    document.getElementsByTagName("body")[0].appendChild(widgetParentCopy);
    containerWidth = widgetParent.offsetWidth;
  }
  stretchSize = phone ? 15 : 27;
  if (containerWidth < 568) {
    Builder.main.style.fontSize = containerWidth / stretchSize + "px";
  } else {
    Builder.main.style.fontSize = "16px";
  }
  oldOnResize = window.onresize;
  window.onresize = function(event) {
    if (widgetParent.offsetWidth >= 568 && !phone) {
      return Builder.main.style.fontSize = "16px";
    } else {
      return Builder.main.style.fontSize = widgetParent.offsetWidth / stretchSize + "px";
    }
  };
  supportsOrientationChange = "onorientationchange" in window;
  orientationEvent = (supportsOrientationChange ? "orientationchange" : "resize");
  window.addEventListener(orientationEvent, (function() {
    var newWidth;
    if (phone) {
      if (oldOnResize) {
        oldOnResize.call(window, event);
      }
      newWidth = Builder.main.offsetWidth / 15;
      return Builder.main.style.fontSize = newWidth + "px";
    }
  }), false);
  return Builder;
};