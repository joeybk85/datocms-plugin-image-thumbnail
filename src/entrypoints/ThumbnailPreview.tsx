import { Canvas } from 'datocms-react-ui';
import { RenderFieldExtensionCtx } from "datocms-plugin-sdk";

type PropTypes = {
  ctx: RenderFieldExtensionCtx;
};

function getValueByPath<T>(obj: T, path: string): any {
  const keys = path.split('.');
  return keys.reduce((acc: any, key) => {
    const k = isNaN(Number(key)) ? key : Number(key);
    return acc?.[k];
  }, obj);
}

export default function ThumbnailPreview({ ctx }: PropTypes) {
   const value = getValueByPath(ctx.formValues, ctx.fieldPath);

  if(value && value.toLowerCase().startsWith('https') && (value.toLowerCase().endsWith('.jpg') || value.toLowerCase().endsWith('.jpeg') || value.toLowerCase().endsWith('.png') || value.toLowerCase().endsWith('.gif') || value.toLowerCase().endsWith('.webp') || value.toLowerCase().endsWith('.svg'))) {
    return (
        <Canvas ctx={ctx}>
            <img src={value} alt="Thumbnail Preview" style={{ maxWidth: '100%', maxHeight: '160px', objectFit: 'contain', margin: '0 auto', display: 'block' }} />
        </Canvas>
    );
  }

  return (
        <Canvas ctx={ctx}>
        <div></div>
        </Canvas>
    );
  
}