import {Image, Link, Video} from '@shopify/hydrogen';

import {Heading, Text} from '~/components';

export function Hero({
  byline,
  cta,
  handle,
  heading,
  height,
  loading,
  spread,
  spreadSecondary,
  spreadSecondaryFirst,
  top,
}) {
  return (
    
    
    <Link to={`/collections/${handle}`}>
      <div class="bg_shape"></div>
      <section
        className={`relative justify-end flex flex-col w-full w-hero_banner ${
          top && '-mt-nav'
        } ${
          height === 'full'
            ? 'h-screen'
            : 'aspect-[4/5] sm:aspect-square md:aspect-[5/4] lg:aspect-[3/2] xl:aspect-[2/1]'
        }`}
      >
        
        <div className="absolute inset-0 grid flex-grow grid-flow-col pointer-events-none auto-cols-fr -z-10 content-stretch overflow-clip w-container">
          {spread?.reference && (
            <div className="">
              
            </div>
          )}
          {spreadSecondary?.reference && (
            <div className="hidden md:block relative w-secondary">
              <>
              <div className='relative fig-1'>
              <SpreadMedia
                
                sizes="(min-width: 80em) 700, (min-width: 48em) 450, 500"
                widths={[350, 500]}
                width={375}
                data={spreadSecondary.reference}
              />
                
              
              <div class="w-overflow">
              <Image src="https://cdn.shopify.com/s/files/1/0522/5932/4060/files/CustomerEngagement-per.png?v=1658395202" width= {350} height={350}/>
              </div>
              <div class="w-overflow2">
              <Image src="https://getwiser.ai/images/Conversion-per.png" width= {350} height={350}/>
              </div>
              <div class="w-overflow3">
              <Image src="https://getwiser.ai/images/OrderValue-per.png" width= {350} height={350}/>
              </div>
              </div>
              </>
            </div>
            
          )}
          
         
        </div>
        <div className="flex flex-col items-baseline justify-between gap-4 px-6 py-8 sm:px-8 md:px-12 bg-gradient-to-t dark:from-contrast/60 dark:text-primary from-primary/60 text-contrast">
          {heading?.value && (
            <Heading format as="h2" size="display" className="max-w-md">
              {heading.value}
            </Heading>
          )}
          {byline?.value && (
            <Text format width="narrow" as="p" size="lead">
              {byline.value}
            </Text>
          )}
          {cta?.value && <Text size="lead">{cta.value}</Text>}
        </div>
      </section>
    </Link>
    
  );
}

function SpreadMedia({data, loading, scale, sizes, width, widths}) {
  if (data.mediaContentType === 'VIDEO') {
    return (
      <Video
        previewImageOptions={{scale, src: data.previewImage.url}}
        width={scale * width}
        className="block object-cover w-full h-full"
        data={data}
        controls={false}
        muted
        loop
        playsInline
        autoPlay
      />
    );
  }

  if (data.mediaContentType === 'IMAGE') {
    return (
      <Image
        widths={widths}
        sizes={sizes}
        alt={data.alt || 'Marketing Banner Image'}
        className="block object-cover w-full h-full"
        // @ts-ignore
        data={data.image}
        loading={loading}
        width={width}
        loaderOptions={{scale, crop: 'center'}}
      />
    );
  }

  return null;
}
