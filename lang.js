(function () {
  var KEY = "kick-notifier-lang";
  var i18n = {
    tr: {
      "nav.releases": "Yenilikler",
      "nav.features": "Özellikler",
      "nav.download": "İndir",
      "nav.docs": "Kurulum",
      "nav.docs.index": "Kurulum Rehberi",
      "nav.home": "Anasayfa",
      "intro.h1": "Takip ettiğin Kick yayıncılarını hiç kaçırma.",
      "intro.lead":
        "Favori yayıncıların canlı olup olmadığını, izleyici sayılarını ve profil bilgilerini tek bakışta gösteren tarayıcı eklentisi. Gereksiz hiçbir şey yok.",
      "intro.dl.firefox": "Firefox için indir",
      "intro.dl.chromium": "Chromium için indir",
      "new.title": "Yenilikler",
      "new.when": "27 Ağustos 2026",
      "new.c1": "<strong>Chromium</strong> sürümüne dil desteği eklendi.",
      "new.c2":
        "Eklenti artık <strong>İngilizce</strong> ve <strong>Almanca</strong> dillerinde de kullanılabiliyor.",
      "feat.title": "Özellikler",
      "feat.list": "Takip listesi",
      "feat.list.d": "İstediğin Kick kullanıcılarını ekleyip tek listede yönet.",
      "feat.live": "Canlı durumu",
      "feat.live.d": "Yayın açık mı, kapalı mı; tek bakışla öğren.",
      "feat.viewers": "İzleyici bilgisi",
      "feat.viewers.d": "Canlı yayınların izleyici hacmini ve aktivitesini gör.",
      "dl.title": "İndir",
      "dl.firefox": "Firefox",
      "dl.firefox.d": ".xpi dosyasıyla kurulur.",
      "dl.firefox.a": "AMO sayfası",
      "dl.chromium": "Chromium",
      "dl.chromium.d": "Chrome, Edge ve Brave; geliştirici moduyla yüklenir.",
      "dl.chromium.a": "Releases sayfası",
      "footer.copy": "© 2026 insanmusti",
      "footer.home": "kurulum rehberi",
      "footer.home.index": "anasayfa",
      "docs.h1": "Releases bölümünden indirip tarayıcına yükle.",
      "docs.lead":
        "Firefox için .xpi dosyasını, Chromium tabanlı tarayıcılar için zip arşivini GitHub Releases bölümünden indir.",
      "docs.firefox": "Firefox — AMO'dan kurulum",
      "docs.ff.desc": "Eklentiyi doğrudan Firefox eklenti mağazasından (AMO) kur.",
      "docs.ff.btn": "Firefox'tan indir",
      "docs.amo": "Firefox AMO sayfası",
      "docs.chromium": "Chromium — geliştirici moduyla kurulum",
      "docs.c1": "GitHub releases sayfasından zip dosyasını indir ve bir klasöre çıkart.",
      "docs.c2": "<code>chrome://extensions</code> adresine gir.",
      "docs.c3": "Sağ üst köşedeki <strong>Geliştirici modu</strong> anahtarını aç.",
      "docs.c4": "<strong>Paketlenmemiş öğe yükle</strong> (Load unpacked) butonuna tıkla.",
      "docs.c5":
        "Çıkarttığın <strong>kick-takipci-chromium</strong> klasörünü seç.",
      "docs.chr": "Chromium releases sayfası",
      "docs.note":
        "İndirme ve kurulum için doğrudan GitHub Releases bölümünü kullan; böylece eklentinin güncel sürümünü güvenli şekilde almış olursun."
    },
    en: {
      "nav.releases": "Changelog",
      "nav.features": "Features",
      "nav.download": "Download",
      "nav.docs": "Setup",
      "nav.docs.index": "Setup Guide",
      "nav.home": "Home",
      "intro.h1": "Never miss the Kick streamers you follow.",
      "intro.lead":
        "A browser extension that shows whether your favorite streamers are live, their viewer counts and profile info at a glance. Nothing extra.",
      "intro.dl.firefox": "Download for Firefox",
      "intro.dl.chromium": "Download for Chromium",
      "new.title": "Changelog",
      "new.when": "August 27, 2026",
      "new.c1": "Language support added to the <strong>Chromium</strong> version.",
      "new.c2":
        "The extension is now also available in <strong>English</strong> and <strong>German</strong>.",
      "feat.title": "Features",
      "feat.list": "Follow list",
      "feat.list.d": "Add any Kick users you want and manage them in one list.",
      "feat.live": "Live status",
      "feat.live.d": "See at a glance whether a stream is live or not.",
      "feat.viewers": "Viewer info",
      "feat.viewers.d": "See viewer volume and activity for live streams.",
      "dl.title": "Download",
      "dl.firefox": "Firefox",
      "dl.firefox.d": "Installed from a .xpi file.",
      "dl.firefox.a": "AMO page",
      "dl.chromium": "Chromium",
      "dl.chromium.d": "Chrome, Edge and Brave; loaded in developer mode.",
      "dl.chromium.a": "Releases page",
      "footer.copy": "© 2026 insanmusti",
      "footer.home": "setup guide",
      "footer.home.index": "home",
      "docs.h1": "Download from Releases and install it in your browser.",
      "docs.lead":
        "Download the .xpi file for Firefox and the zip archive for Chromium-based browsers from the GitHub Releases section.",
      "docs.firefox": "Firefox — install from AMO",
      "docs.ff.desc": "Install the extension directly from the Firefox Add-ons store (AMO).",
      "docs.ff.btn": "Download from Firefox",
      "docs.amo": "Firefox AMO page",
      "docs.chromium": "Chromium — install in developer mode",
      "docs.c1": "Download the zip file from the GitHub releases page and extract it to a folder.",
      "docs.c2": "Go to <code>chrome://extensions</code>.",
      "docs.c3": "Enable the <strong>Developer mode</strong> toggle in the top right.",
      "docs.c4": "Click <strong>Load unpacked</strong>.",
      "docs.c5": "Select the <strong>kick-takipci-chromium</strong> folder you extracted.",
      "docs.chr": "Chromium releases page",
      "docs.note":
        "Download and install directly from the GitHub Releases section, so you safely get the latest version of the extension."
    }
  };

  var saved = null;
  try {
    saved = localStorage.getItem(KEY);
  } catch (e) {}
  var lang = saved === "en" ? "en" : "tr";

  function apply() {
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (i18n[lang] && i18n[lang][key] != null) {
        nodes[i].innerHTML = i18n[lang][key];
      }
    }
    var btn = document.getElementById("lang-toggle");
    if (btn) {
      btn.innerHTML =
        '<span class="' + (lang === "tr" ? "on" : "") + '">TR</span><i>/</i><span class="' + (lang === "en" ? "on" : "") + '">EN</span>';
    }
    document.documentElement.lang = lang;
  }

  function toggle() {
    lang = lang === "tr" ? "en" : "tr";
    try {
      localStorage.setItem(KEY, lang);
    } catch (e) {}
    apply();
  }

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("lang-toggle");
    if (btn) btn.addEventListener("click", toggle);
    apply();
  });
})();
