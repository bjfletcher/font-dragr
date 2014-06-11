angular.module("fdApp").run(["$templateCache", function($templateCache) {

  $templateCache.put("views/main.html",
    "<section class=\"skycom-container\"><div class=\"skycom-6\"><h4 class=\"u-centered\">Available Fonts:</h4><div ng-repeat=\"font in gallery\"><a id=\"{{font.name}}\" draggable=\"true\" fd-tap=\"loadFont('gallery/{{font.name}}')\" class=\"button btn btn--download secondary\">Load {{ font.url.split('/').reverse()[0] }} ({{ font.size }})</a></div><div ng-show=\"!gallery.length\" class=\"u-centered\"><i>Empty</i></div><div ng-show=\"gallery.length\" class=\"right\"><a fd-tap=\"deleteAllFonts()\">Delete All</a></div></div><div class=\"skycom-6\"><h4 class=\"u-centered\">Loaded Fonts:</h4><div fd-font-list=\"\"></div></div></section><div class=\"clear\"></div><div ng-hide=\"font.activeFont\" class=\"skycom-container\"><h4 class=\"u-verticalMargins u-centered\">Select a font from the Loaded Fonts list above.</h4></div><div id=\"wfs\" ng-show=\"font.activeFont\" contenteditable=\"true\" ng-style=\"{ 'font-family': font.activeFont }\" class=\"skycom-container\"><section role=\"region\" class=\"skycom-6\"><h2>Text sample <span>&#8211; CSS font-size (px) with 1.4em line-height</span></h2><p class=\"s s18\"><span>18</span>Is not the best kind of originality that which comes after a sound apprenticeship? That which shall prove to be the blending of a firm conception of, &#8220;useful precedent&#8221;&hellip;</p><p class=\"s s14\"><span>14</span>Is not the best kind of originality that which comes after a sound apprenticeship? That which shall prove to be the blending of a firm conception of, &#8220;useful precedent&#8221; and the progressive tendencies of&hellip;</p><p class=\"s s12\"><span>12</span>Is not the best kind of originality that which comes after a sound apprenticeship? That which shall prove to be the blending of a firm conception of, &#8220;useful precedent&#8221; and the progressive tendencies of an able mind. For, let a man be as able &amp; original&hellip;</p><p class=\"s s11\"><span>11</span>Is not the best kind of originality that which comes after a sound apprenticeship? That which shall prove to be the blending of a firm conception of, &#8220;useful precedent&#8221; and the progressive tendencies of an able mind. For, let a man be as able &amp; original as he may&hellip;</p><p class=\"s s10\"><span>10</span>Is not the best kind of originality that which comes after a sound apprenticeship? That which shall prove to be the blending of a firm conception of, &#8220;useful precedent&#8221; and the progressive tendencies of an able mind. For, let a man be as able &amp; original as he may, he can&#8217;t afford to discard knowledge of what&hellip;</p><p class=\"s s9\"><span>9</span>Is not the best kind of originality that which comes after a sound apprenticeship? That which shall prove to be the blending of a firm conception of, &#8220;useful precedent&#8221; and the progressive tendencies of an able mind. For, let a man be as able &amp; original as he may, he can&#8217;t afford to discard knowledge of what has gone before or what is now going&hellip;</p></section><section role=\"region\" class=\"skycom-6 charset\"><h2>Characters</h2><p class=\"s s56\">A&#8201;B&#8201;C&#8201;D&#8201;E&#8201;F&#8201;G&#8201;H&#8201;I&#8201;J&#8201;K&#8201;L&#8201;M&#8201;N&#8201;O&#8201;P&#8201;Q&#8201;R&#8201;S&#8201;T&#8201;U&#8201;V&#8201;W&#8201;X&#8201;Y&#8201;Z<br/>a&#8201;b&#8201;c&#8201;d&#8201;e&#8201;f&#8201;g&#8201;h&#8201;i&#8201;j&#8201;k&#8201;l&#8201;m&#8201;n&#8201;o&#8201;p&#8201;q&#8201;r&#8201;s&#8201;t&#8201;u&#8201;v&#8201;w&#8201;x&#8201;y&#8201;z<br/>1&#8201;2&#8201;3&#8201;4&#8201;5&#8201;6&#8201;7&#8201;8&#8201;9&#8201;0&#8201;&amp;&#8201;@&#8201;.&#8201;,&#8201;?&#8201;!&#8201;&#8217;&#8201;&#8220;&#8201;&#8221;&#8201;(&#8201;)</p></section><section class=\"skycom-12\"><h2>Body size comparison</h2><div class=\"bodysize\"><table><tr><th class=\"fontname\">&nbsp;</th><th>Arial<a href=\"http://www.codestyle.org/servlets/FontStack?stack=Arial,Helvetica&amp;generic=sans-serif\">stack</a></th><th>Times<a href=\"http://www.codestyle.org/servlets/FontStack?stack=Times+New+Roman,Times&amp;generic=serif\">stack</a></th><th>Georgia<a href=\"http://www.codestyle.org/servlets/FontStack?stack=Georgia,New+Century+Schoolbook,Nimbus+Roman+No9+L&amp;generic=serif\">stack</a></th></tr><tr><td><span>Body</span></td><td class=\"tf typeface2\"><span>Body</span></td><td class=\"tf typeface3\"><span>Body</span></td><td class=\"tf typeface4\"><span>Body</span></td></tr></table></div></section><section class=\"skycom-12\"><h2>Grayscale<span>&#8211; CSS hex color on white</span></h2><div class=\"grayscale clearfix\"><div class=\"skycom-6 white alpha\"><p class=\"c000\"><span>#000</span>The best kind of originality is that which comes after a sound apprenticeship, that which shall prove to be the blending of a firm conception of useful precedent and the progressive tendencies of an able mind. For, let a man be as able and original as he may, he cannot afford to</p><p class=\"c333\"><span>#333</span>The best kind of originality is that which comes after a sound apprenticeship, that which shall prove to be the blending of a firm conception of useful precedent and the progressive tendencies of an able mind. For, let a man be as able and original as he may, he cannot afford to</p><p class=\"c666\"><span>#666</span>The best kind of originality is that which comes after a sound apprenticeship, that which shall prove to be the blending of a firm conception of useful precedent and the progressive tendencies of an able mind. For, let a man be as able and original as he may, he cannot afford to</p><p class=\"c999\"><span>#999</span>The best kind of originality is that which comes after a sound apprenticeship, that which shall prove to be the blending of a firm conception of useful precedent and the progressive tendencies of an able mind. For, let a man be as able and original as he may, he cannot afford to</p><p class=\"cCCC\"><span>#CCC</span>The best kind of originality is that which comes after a sound apprenticeship, that which shall prove to be the blending of a firm conception of useful precedent and the progressive tendencies of an able mind. For, let a man be as able and original as he may, he cannot afford to</p></div><div class=\"skycom-6 black omega\"><p class=\"cFFF\"><span>#FFF</span>The best kind of originality is that which comes after a sound apprenticeship, that which shall prove to be the blending of a firm conception of useful precedent and the progressive tendencies of an able mind. For, let a man be as able and original as he may, he cannot afford to</p><p class=\"cCCC\"><span>#CCC</span>The best kind of originality is that which comes after a sound apprenticeship, that which shall prove to be the blending of a firm conception of useful precedent and the progressive tendencies of an able mind. For, let a man be as able and original as he may, he cannot afford to</p><p class=\"c999\"><span>#999</span>The best kind of originality is that which comes after a sound apprenticeship, that which shall prove to be the blending of a firm conception of useful precedent and the progressive tendencies of an able mind. For, let a man be as able and original as he may, he cannot afford to</p><p class=\"c666\"><span>#666</span>The best kind of originality is that which comes after a sound apprenticeship, that which shall prove to be the blending of a firm conception of useful precedent and the progressive tendencies of an able mind. For, let a man be as able and original as he may, he cannot afford to</p><p class=\"c333\"><span>#333</span>The best kind of originality is that which comes after a sound apprenticeship, that which shall prove to be the blending of a firm conception of useful precedent and the progressive tendencies of an able mind. For, let a man be as able and original as he may, he cannot afford to</p></div></div></section><section class=\"skycom-12\"><h2>Grayscale<span>&#8211; CSS hex color on black</span></h2><div class=\"grayscale u-blackBackground clearfix\"><div class=\"skycom-6 white alpha\"><p class=\"c000\"><span>#000</span>The best kind of originality is that which comes after a sound apprenticeship, that which shall prove to be the blending of a firm conception of useful precedent and the progressive tendencies of an able mind. For, let a man be as able and original as he may, he cannot afford to</p><p class=\"c333\"><span>#333</span>The best kind of originality is that which comes after a sound apprenticeship, that which shall prove to be the blending of a firm conception of useful precedent and the progressive tendencies of an able mind. For, let a man be as able and original as he may, he cannot afford to</p><p class=\"c666\"><span>#666</span>The best kind of originality is that which comes after a sound apprenticeship, that which shall prove to be the blending of a firm conception of useful precedent and the progressive tendencies of an able mind. For, let a man be as able and original as he may, he cannot afford to</p><p class=\"c999\"><span>#999</span>The best kind of originality is that which comes after a sound apprenticeship, that which shall prove to be the blending of a firm conception of useful precedent and the progressive tendencies of an able mind. For, let a man be as able and original as he may, he cannot afford to</p><p class=\"cCCC\"><span>#CCC</span>The best kind of originality is that which comes after a sound apprenticeship, that which shall prove to be the blending of a firm conception of useful precedent and the progressive tendencies of an able mind. For, let a man be as able and original as he may, he cannot afford to</p></div><div class=\"skycom-6 black omega\"><p class=\"cFFF\"><span>#FFF</span>The best kind of originality is that which comes after a sound apprenticeship, that which shall prove to be the blending of a firm conception of useful precedent and the progressive tendencies of an able mind. For, let a man be as able and original as he may, he cannot afford to</p><p class=\"cCCC\"><span>#CCC</span>The best kind of originality is that which comes after a sound apprenticeship, that which shall prove to be the blending of a firm conception of useful precedent and the progressive tendencies of an able mind. For, let a man be as able and original as he may, he cannot afford to</p><p class=\"c999\"><span>#999</span>The best kind of originality is that which comes after a sound apprenticeship, that which shall prove to be the blending of a firm conception of useful precedent and the progressive tendencies of an able mind. For, let a man be as able and original as he may, he cannot afford to</p><p class=\"c666\"><span>#666</span>The best kind of originality is that which comes after a sound apprenticeship, that which shall prove to be the blending of a firm conception of useful precedent and the progressive tendencies of an able mind. For, let a man be as able and original as he may, he cannot afford to</p><p class=\"c333\"><span>#333</span>The best kind of originality is that which comes after a sound apprenticeship, that which shall prove to be the blending of a firm conception of useful precedent and the progressive tendencies of an able mind. For, let a man be as able and original as he may, he cannot afford to</p></div></div></section><section class=\"ulc clearfix\"><section class=\"skycom-12\"><h2>Size<span>&#8211; CSS font-size (px)</span></h2><p class=\"s s36\"><span>36</span><span class=\"text\">Pack my box with five dozen liquor jugs.</span></p><p class=\"s s30\"><span>30</span><span class=\"text\">Pack my box with five dozen liquor jugs.</span></p><p class=\"s s24\"><span>24</span><span class=\"text\">Pack my box with five dozen liquor jugs.</span></p></section><section class=\"skycom-8\"><p class=\"s s21\"><span>21</span><span class=\"text\">Pack my box with five dozen liquor jugs.</span></p><p class=\"s s18\"><span>18</span><span class=\"text\">Pack my box with five dozen liquor jugs.</span></p></section><section class=\"skycom-4 upp\"><p class=\"s s9\"><span>9</span><span class=\"text\">Pack my box with five dozen liquor jugs</span></p><p class=\"s s10\"><span>10</span><span class=\"text\">Pack my box with five dozen liquor jugs</span></p></section><div class=\"clearfix\"></div><section class=\"skycom-6\"><p class=\"s s16\"><span>16</span><span class=\"text\">Pack my box with five dozen liquor jugs.</span></p><p class=\"s s14\"><span>14</span><span class=\"text\">Pack my box with five dozen liquor jugs.</span></p><p class=\"s s13\"><span>13</span><span class=\"text\">Pack my box with five dozen liquor jugs.</span></p></section><section class=\"skycom-6 upp\"><p class=\"s s11\"><span>11</span><span class=\"text\">Pack my box with five dozen liquor jugs</span></p><p class=\"s s12\"><span>12</span><span class=\"text\">Pack my box with five dozen liquor jugs</span></p><p class=\"s s13\"><span>13</span><span class=\"text\">Pack my box with five dozen liquor jugs</span></p></section><div class=\"clearfix\"></div><section class=\"skycom-4\"><p class=\"s s12\"><span>12</span><span class=\"text\">Pack my box with five dozen liquor jugs.</span></p><p class=\"s s11\"><span>11</span><span class=\"text\">Pack my box with five dozen liquor jugs.</span></p><p class=\"s s10\"><span>10</span><span class=\"text\">Pack my box with five dozen liquor jugs.</span></p><p class=\"s s9\"><span>9</span><span class=\"text\">Pack my box with five dozen liquor jugs.</span></p></section><section class=\"skycom-8 upp\"><p class=\"s s14\"><span>14</span><span class=\"text\">Pack my box with five dozen liquor jugs</span></p><p class=\"s s16\"><span>16</span><span class=\"text\">Pack my box with five dozen liquor jugs</span></p><p class=\"s s18\"><span>18</span><span class=\"text\">Pack my box with five dozen liquor jugs</span></p></section><div class=\"clearfix\"></div><section class=\"skycom-12 upp\"><p class=\"s s21\"><span>21</span><span class=\"text\">Pack my box with five dozen liquor jugs</span></p><p class=\"s s24\"><span>24</span><span class=\"text\">Pack my box with five dozen liquor jugs</span></p><p class=\"s s30\"><span>30</span><span class=\"text\">Pack my box with five dozen liquor jugs</span></p></section></section></div>"
  );

}]);