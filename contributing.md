# Contributing

Suggestions and pull requests are highly welcome! Have a look at the [open issues](https://github.com/apsknight/eziitbbs/issues).

## Notions

- The extension can be loaded into Chrome or Firefox(not supported yet) manually ([See notes below](#loading-into-the-browser)).
- Vanilla javascript is used to create DOM elements and manipulation.



## Workflow

Get the source on your machine and start working:

```sh
git clone https://github.com/apsknight/eziitbbs.git
cd eziitbbs
npm install
```

Then load or reload sorce directory into the browser to see the changes (this does not happen automatically).

## Loading into the browser

Once built, load it in the browser of your choice(curretly only Chrome is supported):

<table>
	<tr>
		<th>Chrome</th>
		<th>Firefox</th>
	</tr>
	<tr>
		<td width="50%">
			<ol>
				<li>Open <code>chrome://extensions</code>;
				<li>Check the <strong>Developer mode</strong> checkbox;
				<li>Click on the <strong>Load unpacked extension</strong> button;
				<li>Select the folder <code>refined-github/distribution</code>.
			</ol>
		</td>
		<td width="50%">
			<ol>
				<li>Open <code>about:debugging#addons</code>;
				<li>Click on the <strong>Load Temporary Add-on</strong> button;
				<li>Select the file <code>refined-github/distribution/manifest.json</code>.
			</ol>
		</td>
	</tr>
</table>