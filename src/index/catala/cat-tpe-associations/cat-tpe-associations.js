import "/src/assets/styles/style.scss";
import "./cat-tpe-associations.scss";

const grandComptes = document.querySelector(".grand-comptes");
const pmeOrganisations = document.querySelector(".pme-organisations");
const tpeAssociations = document.querySelector(".tpe-associations");
const underline0 = document.querySelector(".underline-0");
const underline1 = document.querySelector(".underline-1");
const underline2 = document.querySelector(".underline-2");
const underline3 = document.querySelector(".underline-3");

// grand compte

grandComptes.addEventListener("mouseover", () => {
  underline0.classList.add("underline-0-active-1");
  underline1.classList.add("underline-active-1");
});
grandComptes.addEventListener("mouseout", () => {
  underline0.classList.remove("underline-0-active-1");
  underline1.classList.remove("underline-active-1");
});

// pme organisations

pmeOrganisations.addEventListener("mouseover", () => {
  underline0.classList.add("underline-0-active-1");
  underline2.classList.add("underline-active-1");
});
pmeOrganisations.addEventListener("mouseout", () => {
  underline0.classList.remove("underline-0-active-1");
  underline2.classList.remove("underline-active-1");
});

// tpe-associations

tpeAssociations.addEventListener("mouseover", () => {
  underline0.classList.add("underline-0-active-1");
  underline3.classList.add("underline-active-1");
});
tpeAssociations.addEventListener("mouseout", () => {
  underline0.classList.remove("underline-0-active-1");
  underline3.classList.remove("underline-active-1");
});

const catala = document.querySelector(".catala");
const english = document.querySelector(".english");
const spanish = document.querySelector(".spanish");
const underline7 = document.querySelector(".underline-7");
const underline8 = document.querySelector(".underline-8");
const underline9 = document.querySelector(".underline-9");
const underline10 = document.querySelector(".underline-10");

// catala

catala.addEventListener("mouseover", () => {
  underline8.classList.add("underline-6-active-1");
  underline7.classList.add("underline-7-active-1");
});
catala.addEventListener("mouseout", () => {
  underline8.classList.remove("underline-6-active-1");
  underline7.classList.remove("underline-7-active-1");
});

// english

english.addEventListener("mouseover", () => {
  underline9.classList.add("underline-6-active-1");
  underline7.classList.add("underline-7-active-1");
});
english.addEventListener("mouseout", () => {
  underline9.classList.remove("underline-6-active-1");
  underline7.classList.remove("underline-7-active-1");
});

// spanish

spanish.addEventListener("mouseover", () => {
  underline10.classList.add("underline-6-active-1");
  underline7.classList.add("underline-7-active-1");
});
spanish.addEventListener("mouseout", () => {
  underline10.classList.remove("underline-6-active-1");
  underline7.classList.remove("underline-7-active-1");
});

// fleche rotate

const menuVosBesoins = document.querySelector(".menu-vos-besoins");
const menuLangue = document.querySelector(".menu-langue");
const fleche1 = document.querySelector(".fleche-1");
const fleche2 = document.querySelector(".fleche-2");

menuVosBesoins.addEventListener("mouseover", () => {
  fleche1.classList.add("angle-active-1");
});
menuVosBesoins.addEventListener("mouseout", () => {
  fleche1.classList.remove("angle-active-1");
});
menuLangue.addEventListener("mouseover", () => {
  fleche2.classList.add("angle-active-1");
});
menuLangue.addEventListener("mouseout", () => {
  fleche2.classList.remove("angle-active-1");
});

// btn xs

const btn = document.querySelector(".btn-xs");
const bar1 = document.querySelector(".bar-1");
const bar2 = document.querySelector(".bar-2");
const bar3 = document.querySelector(".bar-3");
const nav = document.querySelector("nav");
const containerGeneral = document.querySelector(".container-general");

btn.addEventListener("click", () => {
  if (bar1.classList.contains("bar-1-active-1")) {
    bar1.classList.remove("bar-1-active-2");
    bar3.classList.remove("bar-3-active-2");
    nav.classList.remove("nav-active-1-xs");
    nav.classList.remove("nav-active-2-xs");
    setTimeout(() => {
      bar1.classList.remove("bar-1-active-1");
      bar2.classList.remove("bar-2-active");
      bar3.classList.remove("bar-3-active-1");
      nav.classList.add("nav-active-1-xs");
    }, 300);
    setTimeout(() => {
      nav.style.display = "none";
      nav.classList.add("nav-active-2-xs");
    }, 1000);
  } else {
    bar1.classList.add("bar-1-active-1");
    bar2.classList.add("bar-2-active");
    bar3.classList.add("bar-3-active-1");
    setTimeout(() => {
      bar1.classList.add("bar-1-active-2");
      bar3.classList.add("bar-3-active-2");
      nav.style.display = "flex";
    }, 300);
  }
});

// menu vos besoins xs

const menuVosBesoinsXS = document.querySelector(".menu-vos-besoins-xs");
const menuVosBesoinsContainerXS = document.querySelector(
  ".menu-vos-besoins-container-xs"
);
const navContainerXs = document.querySelector(".nav-container-xs");
const menuVosBesoinsContainerXs = document.querySelector(
  ".menu-vos-besoins-container-xs"
);
const flecheXs2 = document.querySelector(".fleche-xs-2");

menuVosBesoinsXS.addEventListener("click", () => {
  if (flecheXs2.classList.contains("angle-active-1")) {
    flecheXs2.classList.remove("angle-active-1");
    navContainerXs.classList.remove("nav-container-xs-active-1");
    menuVosBesoinsContainerXS.classList.add(
      "menu-vos-besoins-container-xs-active-1"
    );
    menuVosBesoinsXS.classList.remove("menu-vos-besoins-xs-active-1");
    setTimeout(() => {
      menuVosBesoinsContainerXs.style.display = "none";
      menuVosBesoinsContainerXS.classList.remove(
        "menu-vos-besoins-container-xs-active-1"
      );
    }, 1000);
  } else {
    menuVosBesoinsXS.classList.add("menu-vos-besoins-xs-active-1");
    setTimeout(() => {
      flecheXs2.classList.add("angle-active-1");
      menuVosBesoinsContainerXs.style.display = "flex";
      navContainerXs.classList.add("nav-container-xs-active-1");
    }, 300);
  }
});

// menu langue xs

const menuLangueXs = document.querySelector(".menu-langue-xs");
const containerMenulangueXs = document.querySelector(
  ".container-menu-langue-xs"
);
const flecheXs1 = document.querySelector(".fleche-xs-1");

menuLangueXs.addEventListener("click", () => {
  if (flecheXs1.classList.contains("angle-active-1")) {
    flecheXs1.classList.remove("angle-active-1");
    containerMenulangueXs.classList.add("container-menu-langue-xs-active-1");
    setTimeout(() => {
      containerMenulangueXs.style.display = "none";
      containerMenulangueXs.classList.remove(
        "container-menu-langue-xs-active-1"
      );
    }, 1000);
  } else {
    flecheXs1.classList.add("angle-active-1");
    containerMenulangueXs.style.display = "flex";
  }
});

// header scroll

const headerContainer = document.querySelector(".header-container");
const header = document.querySelector(".header");
const containerMenuLangue = document.querySelector(".container-menu-langue");
const menuVosBesoinsContainer = document.querySelector(
  ".menu-vos-besoins-container"
);

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;
  const topElementToTopViewport = headerContainer.getBoundingClientRect().top;

  if (scrollTop > scrollTop + topElementToTopViewport - clientHeight * -0.9) {
    header.classList.add("header-active");
    containerMenuLangue.classList.add("container-menu-langue-active-1");
    menuVosBesoinsContainer.classList.add(
      "menu-vos-besoins-container-active-1"
    );
  } else {
    header.classList.remove("header-active");
    containerMenuLangue.classList.remove("container-menu-langue-active-1");
    menuVosBesoinsContainer.classList.remove(
      "menu-vos-besoins-container-active-1"
    );
  }
});

// widget

document.addEventListener("DOMContentLoaded", () => {
  let openedWidget = null;

  document.querySelectorAll(".widget-grands-comptes").forEach((widget) => {
    const content = widget.querySelector(".content");
    const textOnOff = content.querySelectorAll(".text-on-off");
    const btnOpenCloseWidget = widget.querySelector(".btn-open-close-widget");

    widget.addEventListener("click", () => {
      if (widget.classList.contains("widget-grands-comptes-active-1")) {
        closeWidget(widget, textOnOff, btnOpenCloseWidget);
        openedWidget = null;
      } else {
        if (openedWidget) {
          const prevContent = openedWidget.querySelector(".content");
          const prevTextOnOff = prevContent.querySelectorAll(".text-on-off");
          const prevBtnOpenCloseWidget = openedWidget.querySelector(
            ".btn-open-close-widget"
          );
          closeWidget(openedWidget, prevTextOnOff, prevBtnOpenCloseWidget);
        }
        openWidget(widget, textOnOff, btnOpenCloseWidget);
        openedWidget = widget;
        if (isLastWidget(widget)) {
          setTimeout(() => {
            if (!isElementInViewport(widget)) {
              scrollIntoView(widget);
            }
          }, 1000);
        }
      }
    });

    function closeWidget(widget, textOnOff, btnOpenCloseWidget) {
      widget.classList.remove("widget-grands-comptes-active-1");
      btnOpenCloseWidget.classList.remove("btn-open-close-widget-active-1");

      setTimeout(() => {
        textOnOff.forEach((element) => {
          element.style.display = "none";
        });
      }, 1000);

      const originalHeight = "10rem";
      widget.style.height = originalHeight;
    }

    function openWidget(widget, textOnOff, btnOpenCloseWidget) {
      widget.classList.add("widget-grands-comptes-active-1");
      btnOpenCloseWidget.classList.add("btn-open-close-widget-active-1");

      textOnOff.forEach((element) => {
        element.style.display = "block";
      });

      const previousHeight = widget.style.height;
      widget.style.height = "auto";
      const fullHeight = widget.scrollHeight + "px";
      widget.style.height = previousHeight;

      widget.offsetHeight;

      widget.style.height = fullHeight;
    }

    function scrollIntoView(widget) {
      widget.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function isLastWidget(widget) {
      const widgets = document.querySelectorAll(".widget-grands-comptes");
      return widget === widgets[widgets.length - 1];
    }

    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  });
});
