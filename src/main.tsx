import { connect, ManualFieldExtensionsCtx, RenderFieldExtensionCtx } from "datocms-plugin-sdk";
import "datocms-react-ui/styles.css";
import ConfigScreen from "./entrypoints/ConfigScreen";
//import { render } from "./utils/render";
import React from 'react';
import ReactDOM from 'react-dom';
import ThumbnailPreview from "./entrypoints/ThumbnailPreview";

function render(component: React.ReactNode) {
  ReactDOM.render(
    <React.StrictMode>{component}</React.StrictMode>,
    document.getElementById('root'),
  );
}

connect({
	renderConfigScreen(ctx) {
		return render(<ConfigScreen ctx={ctx} />);
	},
	manualFieldExtensions(ctx: ManualFieldExtensionsCtx) {

		//console.log(ctx);

		return [
			{
				id: 'thumbnailPreview',
				name: 'Thumbnail Preview',
				type: 'addon',
				fieldTypes: ['string'],
			},
		];
	},
	renderFieldExtension(fieldExtensionId: string, ctx: RenderFieldExtensionCtx) {
		switch (fieldExtensionId) {
			case 'thumbnailPreview':
				return render(<ThumbnailPreview ctx={ctx} />);
		}
	},
});
