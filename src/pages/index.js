import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">VOLDER</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/get-started">
            Get Started
          </Link>
        </div>
      </div>
      <style jsx>{`
        .button {
          appearance: none;
          background-color: #fcfcfd;
          border-radius: 4px;
          border-width: 0;
          box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
          box-sizing: border-box;
          color: #36395a;
          cursor: pointer;
          display: inline-flex;
          font-family: "JetBrains Mono", monospace;
          padding-top: 20px;
          padding-bottom: 20px;
          justify-content: center;
          line-height: 1;
          list-style: none;
          overflow: hidden;
          padding-left: 16px;
          padding-right: 16px;
          position: relative;
          text-align: left;
          text-decoration: none;
          transition: box-shadow 0.15s, transform 0.15s;
          user-select: none;
          -webkit-user-select: none;
          touch-action: manipulation;
          white-space: nowrap;
          will-change: box-shadow, transform;
        }

        .button:focus {
          box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
            #d6d6e7 0 -3px 0 inset;
        }

        .button:hover {
          box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
          transform: translateY(-2px);
        }

        .button:active {
          box-shadow: #d6d6e7 0 3px 7px inset;
          transform: translateY(2px);
        }

        .hero__title {
          font-family: "gaoelregular";
          color: black;
          font-size: 4.3rem;
        }

        .hero__subtitle {
          color: #333333;
        }

        .hero {
          background-color: #a4b0fb;
          background-image: linear-gradient(45deg, #a4b0fb 0%, #f1f4ff 100%);
        }

        html[data-theme="dark"] .hero {
          background: #212529;
        }

        html[data-theme="dark"] .hero__title,
        html[data-theme="dark"] .hero__subtitle {
          color: white;
        }

        @media screen and (max-width: 850px) {
          .hero__title {
            font-size: 3.4rem;
          }
        }
      `}</style>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  );
}
