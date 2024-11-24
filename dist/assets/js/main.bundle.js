(() => {
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e2) {
          reject(e2);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e2) {
          reject(e2);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // src/assets/js/modules/navigation.js
  var navigationButton = document.querySelector(".mobile-navigation-button");
  var mobileNavigation = document.querySelector(".mobile-navigation");
  var init = () => {
    navigationButton == null ? void 0 : navigationButton.addEventListener("click", (event) => {
      event.preventDefault();
      mobileNavigation == null ? void 0 : mobileNavigation.classList.toggle("mobile-navigation--active");
    }, false);
  };

  // node_modules/@googlemaps/adv-markers-utils/dist/index.modern.js
  function e(t, e2) {
    if (null == t)
      return {};
    var r2, i2, n2 = {}, s2 = Object.keys(t);
    for (i2 = 0; i2 < s2.length; i2++)
      e2.indexOf(r2 = s2[i2]) >= 0 || (n2[r2] = t[r2]);
    return n2;
  }
  var r = /* @__PURE__ */ new Set();
  function i(t, ...e2) {
    r.has(t) || (r.add(t), "undefined" != typeof console && console.warn(t, ...e2));
  }
  function n(t, e2 = "assertion failed") {
    if (null == t)
      throw Error(e2);
  }
  var s;
  var a = {};
  var o = /^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/;
  var l = /^rgba?\(\s*(\d+%?)\s*,\s*(\d+%?)\s*,\s*(\d+%?)(?:\s*[,/]\s*(\d*(?:\.\d*)?%?)?)?\)$/;
  function h(t) {
    if (o.test(t))
      return function(t2) {
        return t2.length < 7 ? [Number("0x" + t2[1].repeat(2)), Number("0x" + t2[2].repeat(2)), Number("0x" + t2[3].repeat(2)), 4 === t2.length ? 1 : Number("0x" + t2[4].repeat(2))] : [Number("0x" + t2.slice(1, 3)), Number("0x" + t2.slice(3, 5)), Number("0x" + t2.slice(5, 7)), 7 === t2.length ? 1 : Number("0x" + t2.slice(7, 9))];
      }(t);
    if (l.test(t))
      return c(t);
    if (a[t])
      return a[t].slice(0);
    s || (s = document.createElement("div"), s.style.cssText = "\n        position: absolute;\n        visibility: hidden;\n        pointer-events: none;\n      "), s.style.color = t, document.body.appendChild(s);
    const e2 = getComputedStyle(s).color;
    return s.remove(), a[t] = c(e2);
  }
  function c(t) {
    try {
      const [, e2, r2, i2, n2 = "1"] = t.match(l);
      return [e2, r2, i2, n2].map((t2) => t2.endsWith("%") ? 2.55 * Number(t2.slice(0, -1)) : Number(t2));
    } catch (e2) {
      return i(`rgb-color parsing failed (parsing value: '${t}')`), [0, 0, 0, 1];
    }
  }
  function u(t) {
    return (4 === t.length ? "rgba" : "rgb") + `(${t.join(",")})`;
  }
  function p(t) {
    const [e2, r2, i2] = t.map((t2) => t2 / 255);
    return 0.2126 * d(e2) + 0.7152 * d(r2) + 0.0722 * d(i2);
  }
  var d = (t) => t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
  function m(t, e2 = 1) {
    return g(t, -e2);
  }
  function _(t, e2 = 1) {
    return g(t, e2);
  }
  function g(t, e2 = 1) {
    const [r2, i2, n2, s2 = 1] = t, a2 = function([t2, e3, r3]) {
      const i3 = k((0.4124564 * (t2 = b(t2)) + 0.3575761 * (e3 = b(e3)) + 0.1804375 * (r3 = b(r3))) / f.Xn), n3 = k((0.2126729 * t2 + 0.7151522 * e3 + 0.072175 * r3) / f.Yn), s3 = 116 * n3 - 16;
      return [s3 < 0 ? 0 : s3, 500 * (i3 - n3), 200 * (n3 - k((0.0193339 * t2 + 0.119192 * e3 + 0.9503041 * r3) / f.Zn))];
    }([r2, i2, n2]);
    a2[0] += f.Kn * e2;
    const o2 = function([t2, e3, r3]) {
      let i3, n3, s3;
      return n3 = (t2 + 16) / 116, i3 = isNaN(e3) ? n3 : n3 + e3 / 500, s3 = isNaN(r3) ? n3 : n3 - r3 / 200, n3 = f.Yn * w(n3), i3 = f.Xn * w(i3), s3 = f.Zn * w(s3), [y(3.2404542 * i3 - 1.5371385 * n3 - 0.4985314 * s3), y(-0.969266 * i3 + 1.8760108 * n3 + 0.041556 * s3), y(0.0556434 * i3 - 0.2040259 * n3 + 1.0572252 * s3)];
    }(a2);
    return 1 === s2 ? o2 : [...o2, s2];
  }
  var f = { Kn: 18, Xn: 0.95047, Yn: 1, Zn: 1.08883, t0: 0.137931034, t1: 0.206896552, t2: 0.12841855, t3: 8856452e-9 };
  function b(t) {
    return (t /= 255) <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
  }
  function k(t) {
    return t > f.t3 ? Math.pow(t, 1 / 3) : t / f.t2 + f.t0;
  }
  function y(t) {
    return 255 * (t <= 304e-5 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055);
  }
  function w(t) {
    return t > f.t1 ? t * t * t : f.t2 * (t - f.t0);
  }
  var L = class _L {
    static getInstance(t) {
      return this.instances_.has(t) || this.instances_.set(t, new _L(t)), this.instances_.get(t);
    }
    constructor(t) {
      this.map_ = void 0, this.mapState_ = void 0, this.listeners_ = [], this.map_ = t, t.addListener("bounds_changed", () => this.handleBoundsChange()), this.handleBoundsChange();
    }
    addListener(t) {
      return this.listeners_.push(t), { remove: () => {
        this.listeners_.splice(this.listeners_.indexOf(t), 1);
      } };
    }
    getMapState() {
      return this.mapState_;
    }
    handleBoundsChange() {
      const t = this.map_.getCenter(), e2 = this.map_.getBounds();
      if (t && e2) {
        this.mapState_ = { center: t, bounds: e2, zoom: this.map_.getZoom() || 0, heading: this.map_.getHeading() || 0, tilt: this.map_.getTilt() || 0 };
        for (const t2 of this.listeners_)
          t2(this.mapState_);
      } else
        console.debug("MapStateObserver.handleBoundsChange(): map center and/or bounds undefined. Not updating map state.");
    }
  };
  L.instances_ = /* @__PURE__ */ new Map();
  var V = [{ isValid: (t) => "object" == typeof t && t instanceof google.maps.LatLng, fromLatLng: (t) => t, toLatLng: (t) => t }, { isValid: (t) => Array.isArray(t) && 2 === t.length, fromLatLng: (t) => [t.lng(), t.lat()], toLatLng: (t) => new google.maps.LatLng(t[1], t[0]) }, { isValid: (t) => null !== t && "object" == typeof t && "lat" in t && "lng" in t, fromLatLng: (t) => t.toJSON(), toLatLng: (t) => new google.maps.LatLng(t) }];
  function A(t) {
    for (const e2 of V)
      if (e2.isValid(t))
        return e2;
    throw new Error("unknown position format");
  }
  function E(t) {
    return A(t).toLatLng(t);
  }
  var O = ["position", "draggable", "collisionBehavior", "title", "zIndex", "color", "backgroundColor", "borderColor", "glyphColor", "icon", "glyph", "scale", "content", "classList"];
  var C;
  var S = class {
    constructor(t) {
      this.marker_ = void 0, this.callbackDepth_ = 0, this.marker_ = t;
    }
    getComputedAttributeValue(t) {
      const e2 = this.marker_[t];
      if ("function" != typeof e2)
        return this.marker_[t];
      if (this.callbackDepth_++, this.callbackDepth_ > 10)
        throw new Error("maximum recursion depth reached. This is probably caused by a cyclic dependency in dynamic attributes.");
      const { map: r2, data: i2, marker: n2 } = this.marker_.getDynamicAttributeState(), s2 = e2({ data: i2, map: r2, marker: n2, attr: this });
      return this.callbackDepth_--, s2;
    }
  };
  C = S, (() => {
    Object.defineProperty(C.prototype, "position", { get() {
      const t = this.getComputedAttributeValue("position");
      if (t)
        return E(t);
    } });
    for (const t of O)
      "position" !== t && Object.defineProperty(C.prototype, t, { get() {
        return this.getComputedAttributeValue(t);
      } });
  })();
  var I = ["map"];
  var P;
  var M;
  var D;
  var N = class _N {
    static registerIconProvider(t, e2 = "default") {
      _N.iconProviders.set(e2, t);
    }
    constructor(t = {}, r2) {
      this.map_ = null, this.mapObserver_ = null, this.mapEventListeners_ = [], this.data_ = null, this.markerState_ = { hovered: false, content: document.createElement("div") }, this.attributes_ = {}, this.attributeDefaults_ = {}, this.computedAttributes_ = new S(this), this.markerView_ = void 0, this.pinView_ = void 0, this.updateScheduled_ = false;
      const { map: i2 } = t, n2 = e(t, I);
      !function() {
        if (!("google" in window) || !google.maps)
          throw console.error("Google Maps API couldn't be found. Please make sure to wait for the Google Maps API to load before creating markers."), new Error("Google Maps API not found.");
        if (google.maps && !google.maps.marker)
          throw console.error("Google Maps API was loaded without the required marker-library. To load it, add the '&libraries=marker' parameter to the API url or use `await google.maps.importLibrary('marker');` before creating a marker."), new Error("Google Maps Marker Library not found.");
      }(), this.pinView_ = new google.maps.marker.PinElement(), this.markerView_ = new google.maps.marker.AdvancedMarkerElement(), this.markerView_.content = this.pinView_.element, r2 && (this.data_ = r2), this.setAttributes(n2), i2 && (this.map = i2, this.update());
    }
    addListener(t, e2) {
      if (t in D)
        return this.markerView_.addListener("click" === t ? "gmp-click" : t, e2);
      const r2 = this.markerView_.element;
      return n(r2), r2.addEventListener(t, e2), { remove() {
        r2.removeEventListener(t, e2);
      } };
    }
    get map() {
      return this.map_ || null;
    }
    set map(t) {
      this.map_ !== t && (this.unbindEvents_(), this.mapObserver_ = null, this.map_ = t, t && (this.mapObserver_ = L.getInstance(t), this.bindEvents_()), this.update());
    }
    setData(t) {
      this.data_ = t, this.update();
    }
    setAttributes(t) {
      Object.assign(this.attributes_, t), this.update();
    }
    update() {
      this.updateScheduled_ || (this.updateScheduled_ = true, queueMicrotask(() => {
        this.updateScheduled_ = false, this.performUpdate();
      }));
    }
    performUpdate() {
      if (!this.map)
        return void (this.markerView_.map = null);
      const t = this.computedAttributes_, e2 = t.position;
      e2 ? (this.markerView_.map !== this.map_ && (this.markerView_.map = this.map_), this.markerView_.position = e2, this.markerView_.gmpDraggable = t.draggable || false, this.markerView_.title = t.title || "", this.markerView_.zIndex = t.zIndex, this.markerView_.collisionBehavior = t.collisionBehavior, this.pinView_.scale = t.scale, this.updateContent_(t), t.content && (this.markerState_.content = t.content)) : this.markerView_.map = null;
    }
    updateContent_(t) {
      const { content: e2, classList: r2 } = t;
      if (e2 ? (e2.className = r2 ? Array.isArray(r2) ? r2.join(" ") : r2 : "", this.markerView_.content = e2) : (this.markerView_.content = this.pinView_.element, this.updateColors_(t), this.updateGlyph_(t)), this.markerView_.element) {
        const e3 = this.markerView_.element, { color: r3 = null, backgroundColor: i2 = null, glyphColor: n2 = null, borderColor: s2 = null, scale: a2 = null } = t;
        e3.style.setProperty("--marker-color", r3), e3.style.setProperty("--marker-background-color", i2), e3.style.setProperty("--marker-glyph-color", n2), e3.style.setProperty("--marker-border-color", s2), e3.style.setProperty("--marker-scale", a2 ? a2.toString() : null);
      }
    }
    updateColors_(t) {
      let { color: e2, backgroundColor: r2, borderColor: i2, glyphColor: n2 } = t;
      if (e2) {
        const t2 = h(e2), s2 = m(t2, 1.2), a2 = _(t2, 1.2);
        r2 || (r2 = u(t2)), i2 || (i2 = u(s2)), n2 || (n2 = u(p(t2) > 0.4 ? s2 : a2));
      }
      this.pinView_.background = r2, this.pinView_.borderColor = i2, this.pinView_.glyphColor = n2;
    }
    updateGlyph_(t) {
      if (!t.icon)
        return void (this.pinView_.glyph = t.glyph || void 0);
      let e2 = "default", r2 = t.icon;
      t.icon.includes(":") && ([e2, r2] = t.icon.split(":"));
      const n2 = _N.iconProviders.get(e2);
      n2 ? this.pinView_.glyph = n2(r2) : i(`An icon is set but no icon provider ${"default" === e2 ? "" : `with namespace '${e2}' `}is configured.
You can register an icon-provider using e.g. \`Marker.iconProvider = MaterialIcons()\` to use the material icons webfont.`);
    }
    bindEvents_() {
      n(this.mapObserver_), this.mapEventListeners_ = [this.mapObserver_.addListener(() => this.update()), this.addListener("pointerenter", () => {
        this.markerState_.hovered = true, this.update();
      }), this.addListener("pointerleave", () => {
        this.markerState_.hovered = false, this.update();
      })];
    }
    unbindEvents_() {
      for (const t of this.mapEventListeners_)
        t.remove();
      this.mapEventListeners_ = [];
    }
    getDynamicAttributeState() {
      return n(this.mapObserver_, "this.mapObserver_ is not defined"), { data: this.data_, map: this.mapObserver_.getMapState(), marker: this.markerState_ };
    }
  };
  P = N, N.iconProviders = /* @__PURE__ */ new Map(), (() => {
    for (const t of O)
      Object.defineProperty(P.prototype, t, { get() {
        return this.attributes_[t] || this.attributeDefaults_[t];
      }, set(e2) {
        this.attributes_[t] = e2, this.update();
      } });
  })(), function(t) {
    t.OPTIONAL_AND_HIDES_LOWER_PRIORITY = "OPTIONAL_AND_HIDES_LOWER_PRIORITY", t.REQUIRED = "REQUIRED", t.REQUIRED_AND_HIDES_OPTIONAL = "REQUIRED_AND_HIDES_OPTIONAL";
  }(M || (M = {})), function(t) {
    t.click = "click", t.dragstart = "dragstart", t.drag = "drag", t.dragend = "dragend";
  }(D || (D = {}));

  // node_modules/@googlemaps/js-api-loader/dist/index.mjs
  function __awaiter(thisArg, _arguments, P2, generator) {
    function adopt(value) {
      return value instanceof P2 ? value : new P2(function(resolve) {
        resolve(value);
      });
    }
    return new (P2 || (P2 = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e2) {
          reject(e2);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e2) {
          reject(e2);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var fastDeepEqual = function equal(a2, b2) {
    if (a2 === b2)
      return true;
    if (a2 && b2 && typeof a2 == "object" && typeof b2 == "object") {
      if (a2.constructor !== b2.constructor)
        return false;
      var length, i2, keys;
      if (Array.isArray(a2)) {
        length = a2.length;
        if (length != b2.length)
          return false;
        for (i2 = length; i2-- !== 0; )
          if (!equal(a2[i2], b2[i2]))
            return false;
        return true;
      }
      if (a2.constructor === RegExp)
        return a2.source === b2.source && a2.flags === b2.flags;
      if (a2.valueOf !== Object.prototype.valueOf)
        return a2.valueOf() === b2.valueOf();
      if (a2.toString !== Object.prototype.toString)
        return a2.toString() === b2.toString();
      keys = Object.keys(a2);
      length = keys.length;
      if (length !== Object.keys(b2).length)
        return false;
      for (i2 = length; i2-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(b2, keys[i2]))
          return false;
      for (i2 = length; i2-- !== 0; ) {
        var key = keys[i2];
        if (!equal(a2[key], b2[key]))
          return false;
      }
      return true;
    }
    return a2 !== a2 && b2 !== b2;
  };
  var isEqual = /* @__PURE__ */ getDefaultExportFromCjs(fastDeepEqual);
  var DEFAULT_ID = "__googleMapsScriptId";
  var LoaderStatus;
  (function(LoaderStatus2) {
    LoaderStatus2[LoaderStatus2["INITIALIZED"] = 0] = "INITIALIZED";
    LoaderStatus2[LoaderStatus2["LOADING"] = 1] = "LOADING";
    LoaderStatus2[LoaderStatus2["SUCCESS"] = 2] = "SUCCESS";
    LoaderStatus2[LoaderStatus2["FAILURE"] = 3] = "FAILURE";
  })(LoaderStatus || (LoaderStatus = {}));
  var Loader = class _Loader {
    /**
     * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set
     * using this library, instead the defaults are set by the Google Maps
     * JavaScript API server.
     *
     * ```
     * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});
     * ```
     */
    constructor({ apiKey, authReferrerPolicy, channel, client, id = DEFAULT_ID, language, libraries = [], mapIds, nonce, region, retries = 3, url = "https://maps.googleapis.com/maps/api/js", version }) {
      this.callbacks = [];
      this.done = false;
      this.loading = false;
      this.errors = [];
      this.apiKey = apiKey;
      this.authReferrerPolicy = authReferrerPolicy;
      this.channel = channel;
      this.client = client;
      this.id = id || DEFAULT_ID;
      this.language = language;
      this.libraries = libraries;
      this.mapIds = mapIds;
      this.nonce = nonce;
      this.region = region;
      this.retries = retries;
      this.url = url;
      this.version = version;
      if (_Loader.instance) {
        if (!isEqual(this.options, _Loader.instance.options)) {
          throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(_Loader.instance.options)}`);
        }
        return _Loader.instance;
      }
      _Loader.instance = this;
    }
    get options() {
      return {
        version: this.version,
        apiKey: this.apiKey,
        channel: this.channel,
        client: this.client,
        id: this.id,
        libraries: this.libraries,
        language: this.language,
        region: this.region,
        mapIds: this.mapIds,
        nonce: this.nonce,
        url: this.url,
        authReferrerPolicy: this.authReferrerPolicy
      };
    }
    get status() {
      if (this.errors.length) {
        return LoaderStatus.FAILURE;
      }
      if (this.done) {
        return LoaderStatus.SUCCESS;
      }
      if (this.loading) {
        return LoaderStatus.LOADING;
      }
      return LoaderStatus.INITIALIZED;
    }
    get failed() {
      return this.done && !this.loading && this.errors.length >= this.retries + 1;
    }
    /**
     * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].
     *
     * @ignore
     * @deprecated
     */
    createUrl() {
      let url = this.url;
      url += `?callback=__googleMapsCallback&loading=async`;
      if (this.apiKey) {
        url += `&key=${this.apiKey}`;
      }
      if (this.channel) {
        url += `&channel=${this.channel}`;
      }
      if (this.client) {
        url += `&client=${this.client}`;
      }
      if (this.libraries.length > 0) {
        url += `&libraries=${this.libraries.join(",")}`;
      }
      if (this.language) {
        url += `&language=${this.language}`;
      }
      if (this.region) {
        url += `&region=${this.region}`;
      }
      if (this.version) {
        url += `&v=${this.version}`;
      }
      if (this.mapIds) {
        url += `&map_ids=${this.mapIds.join(",")}`;
      }
      if (this.authReferrerPolicy) {
        url += `&auth_referrer_policy=${this.authReferrerPolicy}`;
      }
      return url;
    }
    deleteScript() {
      const script = document.getElementById(this.id);
      if (script) {
        script.remove();
      }
    }
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     * @deprecated, use importLibrary() instead.
     */
    load() {
      return this.loadPromise();
    }
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     *
     * @ignore
     * @deprecated, use importLibrary() instead.
     */
    loadPromise() {
      return new Promise((resolve, reject) => {
        this.loadCallback((err) => {
          if (!err) {
            resolve(window.google);
          } else {
            reject(err.error);
          }
        });
      });
    }
    importLibrary(name) {
      this.execute();
      return google.maps.importLibrary(name);
    }
    /**
     * Load the Google Maps JavaScript API script with a callback.
     * @deprecated, use importLibrary() instead.
     */
    loadCallback(fn) {
      this.callbacks.push(fn);
      this.execute();
    }
    /**
     * Set the script on document.
     */
    setScript() {
      var _a, _b;
      if (document.getElementById(this.id)) {
        this.callback();
        return;
      }
      const params = {
        key: this.apiKey,
        channel: this.channel,
        client: this.client,
        libraries: this.libraries.length && this.libraries,
        v: this.version,
        mapIds: this.mapIds,
        language: this.language,
        region: this.region,
        authReferrerPolicy: this.authReferrerPolicy
      };
      Object.keys(params).forEach(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (key) => !params[key] && delete params[key]
      );
      if (!((_b = (_a = window === null || window === void 0 ? void 0 : window.google) === null || _a === void 0 ? void 0 : _a.maps) === null || _b === void 0 ? void 0 : _b.importLibrary)) {
        ((g2) => {
          let h2, a2, k2, p2 = "The Google Maps JavaScript API", c2 = "google", l2 = "importLibrary", q = "__ib__", m2 = document, b2 = window;
          b2 = b2[c2] || (b2[c2] = {});
          const d2 = b2.maps || (b2.maps = {}), r2 = /* @__PURE__ */ new Set(), e2 = new URLSearchParams(), u2 = () => (
            // @ts-ignore
            h2 || (h2 = new Promise((f2, n2) => __awaiter(this, void 0, void 0, function* () {
              var _a2;
              yield a2 = m2.createElement("script");
              a2.id = this.id;
              e2.set("libraries", [...r2] + "");
              for (k2 in g2)
                e2.set(k2.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()), g2[k2]);
              e2.set("callback", c2 + ".maps." + q);
              a2.src = this.url + `?` + e2;
              d2[q] = f2;
              a2.onerror = () => h2 = n2(Error(p2 + " could not load."));
              a2.nonce = this.nonce || ((_a2 = m2.querySelector("script[nonce]")) === null || _a2 === void 0 ? void 0 : _a2.nonce) || "";
              m2.head.append(a2);
            })))
          );
          d2[l2] ? console.warn(p2 + " only loads once. Ignoring:", g2) : d2[l2] = (f2, ...n2) => r2.add(f2) && u2().then(() => d2[l2](f2, ...n2));
        })(params);
      }
      const libraryPromises = this.libraries.map((library) => this.importLibrary(library));
      if (!libraryPromises.length) {
        libraryPromises.push(this.importLibrary("core"));
      }
      Promise.all(libraryPromises).then(() => this.callback(), (error) => {
        const event = new ErrorEvent("error", { error });
        this.loadErrorCallback(event);
      });
    }
    /**
     * Reset the loader state.
     */
    reset() {
      this.deleteScript();
      this.done = false;
      this.loading = false;
      this.errors = [];
      this.onerrorEvent = null;
    }
    resetIfRetryingFailed() {
      if (this.failed) {
        this.reset();
      }
    }
    loadErrorCallback(e2) {
      this.errors.push(e2);
      if (this.errors.length <= this.retries) {
        const delay = this.errors.length * Math.pow(2, this.errors.length);
        console.error(`Failed to load Google Maps script, retrying in ${delay} ms.`);
        setTimeout(() => {
          this.deleteScript();
          this.setScript();
        }, delay);
      } else {
        this.onerrorEvent = e2;
        this.callback();
      }
    }
    callback() {
      this.done = true;
      this.loading = false;
      this.callbacks.forEach((cb) => {
        cb(this.onerrorEvent);
      });
      this.callbacks = [];
    }
    execute() {
      this.resetIfRetryingFailed();
      if (this.loading) {
        return;
      }
      if (this.done) {
        this.callback();
      } else {
        if (window.google && window.google.maps && window.google.maps.version) {
          console.warn("Google Maps already loaded outside @googlemaps/js-api-loader. This may result in undesirable behavior as options and script parameters may not match.");
          this.callback();
          return;
        }
        this.loading = true;
        this.setScript();
      }
    }
  };

  // src/assets/js/modules/map.js
  var position = {
    lat: 50.71001434326172,
    lng: 4.379627704620361
  };
  var loader = new Loader({
    apiKey: "AIzaSyAMPfet4ES4bjyVGcjKI0VSR4K8nKONCzA",
    libraries: ["maps", "marker"]
  });
  var mapOptions = {
    center: position,
    zoom: 16,
    disableDefaultUI: true,
    mapId: "fdeb675f09921a8e"
  };
  var init2 = () => __async(void 0, null, function* () {
    const [mapsLibrary] = yield Promise.all([
      loader.importLibrary("maps")
    ]);
    const map = new mapsLibrary.Map(document.getElementById("map"), mapOptions);
    const marke = new N({
      position,
      color: "#E98D62",
      map,
      title: "Medichenois"
    });
  });

  // src/assets/js/main.js
  init();
  init2();
})();
