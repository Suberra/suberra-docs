import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import Idea from "@site/static/content/idea.svg";
import Codefile from "@site/static/content/codefile.svg";

export default function QuickNavigation() {
  return (
    <div>
      <div className={styles.container}>
        <Link className={styles.card} to="/overview/what-is-suberra">
          <div>
            <Idea className={styles.cardIcon} />
            <h5 className={styles.title}>
              <strong>Explore Suberra</strong>
            </h5>
          </div>
          <p>
            Find out more about what Suberra is and how it works.
          </p>

          <span className={styles.footer} href="/overview/what-is-suberra">
            Explore Features →
          </span>
        </Link>
        <Link className={styles.card} to="Integration/getting_started">
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

          <span className={styles.footer} href="Integration/getting_started">
            Begin Integrating →
          </span>
        </Link>
      </div>
    </div>
  );
}
