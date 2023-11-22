import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import styles from "../styles/styles.module.css";

const Index = () => {
  const dummyImages = [
    { src: '/tiger.webp', name:'TIGER 3 (2023)', href: '/movies/Tiger3' },
    { src: '/Fair_Play_2023.webp', name:'FAIR PLAY (2023)', href: '/adult/fairplay' },
    { src: '/Citadel_2023.webp', name:'CITADEL (2023)', href: '/tvshows/citdel' },
    // { src: '/B_B.webp', name:'BURNING BETRAYAL (2023)', href: '/adult/burning-betryal' },
    // { src: '/tiger.webp', name:'Tiger 3', href: '/movies/seconds' },
    // { src: '/tiger.webp', name:'Tiger 3', href: '/movies/seconds' },
    // { src: '/tiger.webp', name:'Tiger 3', href: '/movies/seconds' },
    // { src: '/tiger.webp', name:'Tiger 3', href: '/movies/seconds' },
    // { src: '/tiger.webp', name:'Tiger 3', href: '/movies/seconds' },
    // { src: '/tiger.webp', name:'Tiger 3', href: '/movies/seconds' },
    // { src: '/tiger.webp', name:'Tiger 3', href: '/movies/seconds' },
    // { src: '/tiger.webp', name:'Tiger 3', href: '/movies/seconds' },
    // { src: '/tiger.webp', name:'Tiger 3', href: '/movies/seconds' },
    // { src: '/tiger.webp', name:'Tiger 3', href: '/movies/seconds' },
    // { src: '/tiger.webp', name:'Tiger 3', href: '/movies/seconds' },
    // { src: '/tiger.webp', name:'Tiger 3', href: '/movies/seconds' },
    // { src: '/tiger.webp', name:'Tiger 3', href: '/movies/seconds' },
    // { src: '/tiger.webp', name:'Tiger 3', href: '/movies/seconds' },
   
    // ... (other dummy images)
  ];

  return (
    <>
          <div className={styles.container}>
     <Head>
          <title>
            Watch4free Movies™ | Watch Latest Movies & TV-Series Online Free
          </title>
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index,follow"/>
          <meta name="revisit-after" content="1 days" />
          <meta
            name="facebook-domain-verification"
            content="13auzwhblf4oo4jn5vl6gcmebugsqb"
          />
          <meta property="fb:app_id" content="602176271414602" />
          <meta
            name="dailymotion-domain-verification"
            content="dmv6sg06w9r5eji88"
          />
          <meta
            name="monetag"
            content="076afbb772da1a62ef6f43756dfa5f65"
          ></meta>
          <meta
            name="google-site-verification"
            content="4dFu4PUk1pc1IYqU6Brt84akCwNxaoUpKSO3gDW0kJ0"
          />
          <meta
            name="description"
            content="Watch4free Movies™ - Watch Latest Movies & TV-Series Online Free"
          />
          <meta
            name="robots"
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta
            name="keywords"
            content="Watch4free Movies,Watch4free Movies tv,streaming,latest movies,online tv,latest free movies,watch latest movies online"
          />
          <meta property="og:locale" content="en_US" />
          <meta property=" Content-Security-Policy: frame-ancestors 'self' Watch4free Movies.vercel.app *.Watch4free Movies.vercel.app;" />
          <meta
            property="og:site_name"
            content="Watch4free Movies™ | Watch Latest Movies & TV-Series Online Free "
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Watch4free Movies™ | Watch Latest Movies & TV-Series Online Free "
          />
          <meta
            property="og:description"
            content="Watch4free Movies™ - Watch Latest Movies & TV-Series Online Free "
          />
          <meta property="og:url" content="/" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta
            property="og:image"
            content="/og_image.jpg"
          />
          <meta
            property="og:image:secure_url"
            content="/og_image.jpg"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Watch4free Movies™ - Watch Latest Movies & TV-Series Online Free "
          />
          <meta
            name="twitter:description"
            content=" Watch4free Movies™ - Watch Latest Movies & TV-Series Online Free "
          />
          <meta
            name="twitter:image"
            content="/og_image.jpg"
          />

          <link
            rel="alternate"
            hrefLang="en-us"
            href="/"
          />
          <link
            rel="alternate"
            hrefLang="en-gb"
            href="/"
          />
          <link
            rel="alternate"
            hrefLang="en-ca"
            href="/"
          />
          <link
            rel="alternate"
            hrefLang="en-au"
            href="/"
          />
          <link
            rel="alternate"
            hrefLang="en-se"
            href="/"
          />
          <link
            rel="alternate"
            hrefLang="en-fr"
            href="/"
          />
          <link
            rel="alternate"
            hrefLang="en-dk"
            href="/"
          />
          <link
            rel="alternate"
            hrefLang="en-no"
            href="/"
          />
          <link
            rel="alternate"
            hrefLang="x-default"
            href="/"
          />

          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest"></link>
          <link rel="canonical" href="https://watch4freemovies.onrender.com/" />
          <script async data-cfasync="false" src="//ophoacit.com/1?z=6505995"></script>
        </Head>
  
    <div style={{ backgroundColor: '#000' }}>
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-2">
          {dummyImages.map((image, index) => (
            <Link key={index} href={image.href}>
              <div className="group relative overflow-hidden cursor-pointer transform transition-transform duration-200 hover:scale-105 mb-6"
                style={{
                  position: 'relative',
                  width: '100%',
                  paddingTop: '100%',
                  // border: '1px solid #ddd', // Adjust the border color
                  marginTop: "20px",
                
                }}
              >
                <Image
                  src={image.src}
                  alt={`Dummy Image ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                  style={{
                    filter: 'contrast(1.1) saturate(1.2) brightness(1.5) hue-rotate(0deg)',
                  }}
                />
                {/* Centered name */}
                <div className="absolute inset-0 flex items-center justify-center flex-col opacity-0 group-hover:opacity-100 transition-opacity" style={{ textShadow: "2px 3px 2px #FFF" }}>
                  <p className="text-gray-700 text-xl font-bold"  >{image.name}</p>
                </div>
              </div>
            </Link>
          ))}
    
        </div>
      </div>
    </div>
    </div>
    </>
  );
};


export default Index;
