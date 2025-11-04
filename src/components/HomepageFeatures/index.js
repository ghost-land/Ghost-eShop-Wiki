import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    image: require('@site/static/img/easy_to_use.png').default,
    description: (
      <>
        Get started with Ghost eShop in minutes. Follow our simple step-by-step guides
        to set up the alternative eShop on your Nintendo console.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    image: require('@site/static/img/focus_on.png').default,
    description: (
      <>
        We handle the technical side, and you focus on enjoying your games. Simple setup,
        reliable service, and thousands of titles at your fingertips.
      </>
    ),
  },
  {
    title: 'Powered by Ghost Land',
    image: require('@site/static/img/powered_by_gl.png').default,
    description: (
      <>
        Designed by Ghost Land, hosted on Ghost Land infrastructure, and maintained
        by the Ghost eShop team.
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureImage} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
