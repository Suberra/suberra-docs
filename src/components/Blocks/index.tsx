import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import Idea from "@site/static/content/idea.svg";
import Codefile from "@site/static/content/codefile.svg";

export default function QuickNavigation() {
  return (
    <div>
      <div className={styles.container}>
        <Link className={styles.card} to="/docs/overview/features">
          <div>
            <Idea className={styles.cardIcon} />
            <h5 className={styles.title}>
              <strong>Find a Solution</strong>
            </h5>
          </div>
          <p>
            Discover the core features of Suberra that uniquely address your
            needs.
          </p>

          <span
            className={styles.footer}
            href="/docs/overview/introduction#features-at-a-glance"
          >
            Explore Features →
          </span>
        </Link>
        <Link className={styles.card} to="/docs/integration/getting_started">
          <div>
            <Codefile className={styles.cardIcon} />
            <h5 className={styles.title}>
              <strong>Integrate Seamlessly</strong>
            </h5>
          </div>
          <p>
            Explore our SDK and Webhooks to integrate Suberra into your product
            in a matter of minutes.
          </p>

          <span
            className={styles.footer}
            href="/docs/integration/getting_started"
          >
            Begin Integrating →
          </span>
        </Link>
      </div>
    </div>
  );
}
