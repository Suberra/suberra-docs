import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import Idea from "@site/static/content/idea.svg";
import TelegramImage from "@site/static/content/telegram.svg";

import Codefile from "@site/static/content/codefile.svg";

// image files


export default function UseCaseCards() {
  return (
    <div>
      <div className={styles.container}>
        <Link className={styles.card} to="https://checkout.staging.suberra.io/link/v1/WCi34syz1670236770251">
          <div>
            <TelegramImage className={styles.cardIcon} />
            <h5 className={styles.title}>
              <strong>Telegram Premium</strong>
            </h5>
          </div>
          <p>
            Subscribe to Telegram Premium with USDC on production networks.
          </p>

          <span className={styles.footer} href="https://checkout.staging.suberra.io/link/v1/WCi34syz1670236770251">
            Subscribe Now
          </span>
        </Link>
        <Link className={styles.card} to="https://demo.beta.suberra.com/">
          <div>
            <Codefile className={styles.cardIcon} />
            <h5 className={styles.title}>
              <strong>Demo</strong>
            </h5>
          </div>
          <p>
            Try out our demo to see how an app with paywall might look like. Available on Goerli Testnet.
          </p>

          <span className={styles.footer} href="https://demo.beta.suberra.com/">
            Try our Demo
          </span>
        </Link>
      </div>
    </div>
  );
}
