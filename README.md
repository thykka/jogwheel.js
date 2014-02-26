```
<>                T|           T|
                  ||           ||
T| ,-.  ,-.TT\ T T||,\  ,-. ,-.||
|||I \\|| I||I | |||´I||I )|I )||
|||| |)|| |||| | ||| ||||/ ||/ ||
||\\_I/`\_I||L/L/´\| ||\\_/\\_/\|.js
|| `-´    ||       ` |/ `   `   `
J´      ._/`         ´
```

ABOUT
-----

jogwheel.js is a javascript plugin which makes an HTML element's contents scroll sideways. The user can flick or use the arrow buttons to scroll. An autoscroll option is also provided.


REQUIREMENTS
------------

- jQuery 2.0.3 (other versions might work too)


QUICKSTART
----------

- Add the following lines at the end of your ```<BODY>```

```
<script src="//code.jquery.com/jquery-2.0.3.min.js"></script>
<script src="vnd/jogwheel.min.js" type="text/javascript" charset="utf-8"></script>
```
> (of course, if you already have jQuery on your site, you should omit the first line.)

- add class="jogwheel" to all the elements you wish to make jogwheel wrappers from.


OPTIONS
-------

jogwheel.js has a few global options you can set to modify it's appearence. Values shown here are the defaults.
```
jogwheel.velocity = 50;
```
> Flick inertia amount. Smaller number means less inertia.

```
jogwheel.speed = 400;
```
> Flick inertia decay speed. Smaller number makes flicks stop faster

```
jogwheel.keyspeed = 100;
```
> Length of transition in milliseconds when using arrow keys to scroll

```
jogwheel.crawlspeed = 50;
```
> Controls the crawl speed by setting the delay between each pixel of crawling

```
jogwheel.crawl = false;
```
> Autoscroll will be activated if set to true

Example usage:
```
<script type="text/javascript">
$(document).ready(function() {
  jogwheel.crawl = true;
  jogwheel.keyspeed = 300;
  jogwheel.speed = 100;
});
</script>
```

VERSION NOTES
-------------

- jogwheel.js was developed using Chrome. It's also been briefly tested with Firefox and IE 10. Arrow key navigation doesn't seem to work with IE.
- Touch device navigation should work for devices which support it.
- Minimal testing has been performed. Should you encounter any bugs, please send a detailed report to thykka@gmail.com. At the very least, include your browser, operating system and any possible developer console output.

TASKS
-----
- [ ] Settings should be html parameters, instead of modifying the jogwheel object
- [ ] Ensure compatibility with mobile devices.

DISCLAIMER
----------

I don't care how you use this script. I really don't. Feel free to use it, modify it, derive from it, sell it, distribute it, print it out with a font size equivalent of a small cat, whatever. I'll appreciate it if you include this disclaimer when distributing the script, but in no way is that necessary either. I also take absolutely NO responsibility for ANY possible damage, data, profit or career loss, death, or anything else you might come up with. In other words: Should you choose to use this script or it's accompanying files in any way, you're operating SOLELY on your own responsibility.


LICENSE
-------

<p xmlns:dct="http://purl.org/dc/terms/" xmlns:vcard="http://www.w3.org/2001/vcard-rdf/3.0#">
  <a rel="license"
     href="http://creativecommons.org/publicdomain/zero/1.0/">
    <img src="http://i.creativecommons.org/p/zero/1.0/88x31.png" style="border-style: none;" alt="CC0" />
  </a>
  <br />
  To the extent possible under law,
  <a rel="dct:publisher"
     href="http://thykka.github.io/jogwheel.js">
    <span property="dct:title">Moses Holmström</span></a>
  has waived all copyright and related or neighboring rights to
  <span property="dct:title">Jogwheel.js</span>.
This work is published from:
<span property="vcard:Country" datatype="dct:ISO3166"
      content="FI" about="http://thykka.github.io/jogwheel.js">
  Finland</span>.
</p>

DONATIONS
---------
<a href="https://flattr.com/submit/auto?user_id=Thykka&url=https%3A%2F%2Fgithub.com%2Fthykka%2Fjogwheel.js" target="_blank"><img src="//api.flattr.com/button/flattr-badge-large.png" alt="Flattr this" title="Flattr this" border="0"></a>