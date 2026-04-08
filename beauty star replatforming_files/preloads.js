
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.CgsWKOqO.js","/cdn/shopifycloud/checkout-web/assets/c1/app.BTkPfd-h.js","/cdn/shopifycloud/checkout-web/assets/c1/dist-vendor.OaGWvCWU.js","/cdn/shopifycloud/checkout-web/assets/c1/browser.B-iEARz_.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-FullScreenBackground.DlV2XN9a.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-shared.X74YUWqR.js","/cdn/shopifycloud/checkout-web/assets/c1/actions-shop-discount-offer.Df2OgBEF.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-alternativePaymentCurrency.NpEUWEeX.js","/cdn/shopifycloud/checkout-web/assets/c1/utils-proposal.MMBlbi7Q.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-ButtonWithRegisterWebPixel.BQQMetWE.js","/cdn/shopifycloud/checkout-web/assets/c1/images-flag-icon.C_eXYJRt.js","/cdn/shopifycloud/checkout-web/assets/c1/images-payment-icon.BXeXx6hF.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-it.BACGDoTv.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage.DXd9MDR8.js","/cdn/shopifycloud/checkout-web/assets/c1/Captcha-PaymentButtons.CcKP742x.js","/cdn/shopifycloud/checkout-web/assets/c1/Menu-LocalPickup.BTuMKdka.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-NoAddressLocation.DW7Sqqnh.js","/cdn/shopifycloud/checkout-web/assets/c1/shopPaySessionTokenStorage-Page.CnyfuYOt.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-MarketsProDisclaimer.Dc2Ml7tl.js","/cdn/shopifycloud/checkout-web/assets/c1/icons-OffsitePaymentFailed._OQootSw.js","/cdn/shopifycloud/checkout-web/assets/c1/icons-ShopPayLogo.Bc5ew-K3.js","/cdn/shopifycloud/checkout-web/assets/c1/BuyWithPrimeChangeLink-VaultedPayment.B14A3NMW.js","/cdn/shopifycloud/checkout-web/assets/c1/DeliveryMacros-ShippingGroupsSummaryLine.BXgsggFt.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandisePreviewThumbnail-StackedMerchandisePreview.CHjjpJNP.js","/cdn/shopifycloud/checkout-web/assets/c1/Map-PickupPointCarrierLogo.D3UwVBSM.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks.DRNvK9ku.js","/cdn/shopifycloud/checkout-web/assets/c1/PostPurchaseShouldRender-AddDiscountButton.BlyNwunN.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-RememberMeDescriptionText.B1pN0APU.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-ShopPayOptInDisclaimer.Cv9Urd23.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-MobileOrderSummary.Cc8ToszQ.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-OrderEditVaultedDelivery.C67QaIJz.js","/cdn/shopifycloud/checkout-web/assets/c1/captcha-SeparatePaymentsNotice.DD0bMEqI.js","/cdn/shopifycloud/checkout-web/assets/c1/types-useHasOrdersFromMultipleShops.D9UhH8kE.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList.DjEIN5Qa.js","/cdn/shopifycloud/checkout-web/assets/c1/redemption-useShopCashCheckoutEligibility.DTOxIINd.js","/cdn/shopifycloud/checkout-web/assets/c1/negotiated-ShipmentBreakdown.ieM1ThQ0.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-MerchandiseModal.BeWM6llE.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shipping-options.D9LeGxRI.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-DutyOptions.B5soqc3J.js","/cdn/shopifycloud/checkout-web/assets/c1/DeliveryInstructionsFooter-ShippingMethodSelector.D1nFcWn3.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-SubscriptionPriceBreakdown.B8sA7jpb.js","/cdn/shopifycloud/checkout-web/assets/c1/component-RuntimeExtension.BLFSVBbs.js","/cdn/shopifycloud/checkout-web/assets/c1/DatePicker-AnnouncementRuntimeExtensions.BO4EbcLs.js","/cdn/shopifycloud/checkout-web/assets/c1/standard-rendering-extension-targets.CuKJVHRc.js","/cdn/shopifycloud/checkout-web/assets/c1/esm-browser-v4.BKrj-4V8.js","/cdn/shopifycloud/checkout-web/assets/c1/ExtensionsInner.2DOPY7vS.js","/cdn/shopifycloud/checkout-web/assets/c1/adapter-useShopPayNewSignupLoginExperiment.Cetziesn.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.fH9d1Lew.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/FullScreenBackground.-XSmsMDv.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ButtonWithRegisterWebPixel.BIghpenh.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.Di1yeo0T.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/LocalPickup.DmhmOh0D.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/AddDiscountButton.oEoBAbtG.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.Cko1fUoG.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OrderEditVaultedDelivery.CSQKPDv7.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/NoAddressLocation.BrcQzLuH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DutyOptions.LcqrKXE1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/VaultedPayment.OxMVm7u-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PickupPointCarrierLogo.cbVP6Hp_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Page.BYM12A8B.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OffsitePaymentFailed.BxwwfmsJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.D6OuIVjc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingMethodSelector.B0hio2RO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/SubscriptionPriceBreakdown.BSemv9tH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useHasOrdersFromMultipleShops.D14orovx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RuntimeExtension.DWkDBM73.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/AnnouncementRuntimeExtensions.V0VYEO4K.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  