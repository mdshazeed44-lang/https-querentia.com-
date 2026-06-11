"use client";

import { useEffect, useRef } from "react";

const SAP_LOGO =
  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNTEzIDUxMyI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogdXJsKCNsaW5lYXItZ3JhZGllbnQpOwogICAgICB9CgogICAgICAuY2xzLTEsIC5jbHMtMiB7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAwcHg7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogI2ZmZjsKICAgICAgfQogICAgPC9zdHlsZT4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50IiB4MT0iMjU2LjUiIHkxPSIzMjQuOTkiIHgyPSIyNTYuNSIgeTI9IjE2MC4zMiIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgwIDUxMykgc2NhbGUoMSAtMSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMGFlIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzA1YSIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDIzLDE4OC4wMUg5MHYxNjQuNjdoMTY4LjMzIi8+CiAgPHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMjU0LjY3LDIyMC45NHY3Ny41OGwtMjguNTQtNzcuNThoLTI4LjU0bC0yNC4xNSw2NC40Yy0yLjkzLTE2LjEtMTkuNzYtMjEuOTYtMzIuOTMtMjYuMzUtOC43OC0yLjkzLTE4LjMtNi41OS0xOC4zLTExLjcxLDAtMy42Niw1LjEyLTcuMzIsMTQuNjQtNi41OSw2LjU5LjczLDEyLjQ0LjczLDI0LjE1LDYuNTlsMTEuNzEtMTkuNzZjLTEwLjk4LTUuODUtMjUuNjItOC43OC0zNy4zMy04Ljc4LTEzLjkxLDAtMjUuNjIsNC4zOS0zMi45MywxMS43MS01LjEyLDUuMTItNy4zMiwxMS43MS04LjA1LDE5LjAzLDAsMTAuMjUsMy42NiwxNy41NiwxMS43MSwyMy40Miw2LjU5LDQuMzksMTQuNjQsNy4zMiwyMS45Niw5LjUxLDkuNTEsMi45MywxNi44Myw1Ljg1LDE2LjgzLDEwLjk4LS43Myw2LjU5LTguMDUsOC4wNS0xMy4xNyw4LjA1LTguNzguNzMtMTYuMS0uNzMtMjcuMDgtNy4zMmwtMTAuMjUsMTkuNzZjMTAuOTgsNi41OSwyMi42OSw5LjUxLDM2LjU5LDkuNTEsOS41MSwwLDI0LjE1LTIuOTMsMzIuMi0xMC4yNWwtMS40Niw2LjU5aDI3LjgxbDUuMTItMTIuNDRjMTAuOTgsMi45MywyMy40MiwzLjY2LDM0LjQsMGwzLjY2LDEyLjQ0aDQ5Ljc3di0yOS4yN2gxMC4yNWMyNS42MiwwLDQwLjk4LTEyLjQ0LDQwLjk4LTM0LjQsMC0yNC44OC0xNC42NC0zNS4xMy00Ni4xMS0zNS4xM2gtMzIuOTNaTTIwMS4yNCwyODUuMzVsMTAuMjUtMzIuOTNoLjczbDEwLjI1LDMyLjkzYy03LjMyLDIuMi0xNC42NCwyLjItMjEuMjIsMFpNMjgyLjQ4LDI2OC41MXYtMjYuMzVoNy4zMmM5LjUxLDAsMTYuODMsMi45MywxNi44MywxMi40NCwwLDEwLjI1LTcuMzIsMTMuOTEtMTYuODMsMTMuOTFoLTcuMzJaIi8+Cjwvc3ZnPg==";

const AWS_LOGO =
  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTMgNTEzIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjZjkwOwogICAgICAgIGZpbGwtcnVsZTogZXZlbm9kZDsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTIgewogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICMyNTJmM2U7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTE5MC45LDI0Mi4wNGMwLDMuNy40LDYuNywxLjEsOC45LjgsMi4yLDEuOCw0LjYsMy4yLDcuMi41LjguNywxLjYuNywyLjMsMCwxLS42LDItMS45LDNsLTYuMyw0LjJjLS45LjYtMS44LjktMi42LjktMSwwLTItLjUtMy0xLjQtMS40LTEuNS0yLjYtMy4xLTMuNi00LjctMS0xLjctMi0zLjYtMy4xLTUuOS03LjgsOS4yLTE3LjYsMTMuOC0yOS40LDEzLjgtOC40LDAtMTUuMS0yLjQtMjAtNy4yLTQuOS00LjgtNy40LTExLjItNy40LTE5LjIsMC04LjUsMy0xNS40LDkuMS0yMC42LDYuMS01LjIsMTQuMi03LjgsMjQuNS03LjgsMy40LDAsNi45LjMsMTAuNi44czcuNSwxLjMsMTEuNSwyLjJ2LTcuM2MwLTcuNi0xLjYtMTIuOS00LjctMTYtMy4yLTMuMS04LjYtNC42LTE2LjMtNC42LTMuNSwwLTcuMS40LTEwLjgsMS4zcy03LjMsMi0xMC44LDMuNGMtMS42LjctMi44LDEuMS0zLjUsMS4zLS43LjItMS4yLjMtMS42LjMtMS40LDAtMi4xLTEtMi4xLTMuMXYtNC45YzAtMS42LjItMi44LjctMy41czEuNC0xLjQsMi44LTIuMWMzLjUtMS44LDcuNy0zLjMsMTIuNi00LjUsNC45LTEuMywxMC4xLTEuOSwxNS42LTEuOSwxMS45LDAsMjAuNiwyLjcsMjYuMiw4LjEsNS41LDUuNCw4LjMsMTMuNiw4LjMsMjQuNnYzMi40aC4yWk0xNTAuMywyNTcuMjRjMy4zLDAsNi43LS42LDEwLjMtMS44LDMuNi0xLjIsNi44LTMuNCw5LjUtNi40LDEuNi0xLjksMi44LTQsMy40LTYuNHMxLTUuMywxLTguN3YtNC4yYy0yLjktLjctNi0xLjMtOS4yLTEuN3MtNi4zLS42LTkuNC0uNmMtNi43LDAtMTEuNiwxLjMtMTQuOSw0LTMuMywyLjctNC45LDYuNS00LjksMTEuNSwwLDQuNywxLjIsOC4yLDMuNywxMC42LDIuNCwyLjUsNS45LDMuNywxMC41LDMuN1pNMjMwLjYsMjY4LjA0Yy0xLjgsMC0zLS4zLTMuOC0xLS44LS42LTEuNS0yLTIuMS0zLjlsLTIzLjUtNzcuM2MtLjYtMi0uOS0zLjMtLjktNCwwLTEuNi44LTIuNSwyLjQtMi41aDkuOGMxLjksMCwzLjIuMywzLjksMSwuOC42LDEuNCwyLDIsMy45bDE2LjgsNjYuMiwxNS42LTY2LjJjLjUtMiwxLjEtMy4zLDEuOS0zLjkuOC0uNiwyLjItMSw0LTFoOGMxLjksMCwzLjIuMyw0LDEsLjguNiwxLjUsMiwxLjksMy45bDE1LjgsNjcsMTcuMy02N2MuNi0yLDEuMy0zLjMsMi0zLjkuOC0uNiwyLjEtMSwzLjktMWg5LjNjMS42LDAsMi41LjgsMi41LDIuNSwwLC41LS4xLDEtLjIsMS42LS4xLjYtLjMsMS40LS43LDIuNWwtMjQuMSw3Ny4zYy0uNiwyLTEuMywzLjMtMi4xLDMuOXMtMi4xLDEtMy44LDFoLTguNmMtMS45LDAtMy4yLS4zLTQtMXMtMS41LTItMS45LTRsLTE1LjUtNjQuNS0xNS40LDY0LjRjLS41LDItMS4xLDMuMy0xLjksNC0uOC43LTIuMiwxLTQsMWgtOC42Wk0zNTkuMSwyNzAuNzRjLTUuMiwwLTEwLjQtLjYtMTUuNC0xLjgtNS0xLjItOC45LTIuNS0xMS41LTQtMS42LS45LTIuNy0xLjktMy4xLTIuOC0uNC0uOS0uNi0xLjktLjYtMi44di01LjFjMC0yLjEuOC0zLjEsMi4zLTMuMS42LDAsMS4yLjEsMS44LjMuNi4yLDEuNS42LDIuNSwxLDMuNCwxLjUsNy4xLDIuNywxMSwzLjUsNCwuOCw3LjksMS4yLDExLjksMS4yLDYuMywwLDExLjItMS4xLDE0LjYtMy4zLDMuNC0yLjIsNS4yLTUuNCw1LjItOS41LDAtMi44LS45LTUuMS0yLjctNy0xLjgtMS45LTUuMi0zLjYtMTAuMS01LjJsLTE0LjUtNC41Yy03LjMtMi4zLTEyLjctNS43LTE2LTEwLjItMy4zLTQuNC01LTkuMy01LTE0LjUsMC00LjIuOS03LjksMi43LTExLjEsMS44LTMuMiw0LjItNiw3LjItOC4yLDMtMi4zLDYuNC00LDEwLjQtNS4yLDQtMS4yLDguMi0xLjcsMTIuNi0xLjcsMi4yLDAsNC41LjEsNi43LjQsMi4zLjMsNC40LjcsNi41LDEuMSwyLC41LDMuOSwxLDUuNywxLjYsMS44LjYsMy4yLDEuMiw0LjIsMS44LDEuNC44LDIuNCwxLjYsMywyLjUuNi44LjksMS45LjksMy4zdjQuN2MwLDIuMS0uOCwzLjItMi4zLDMuMi0uOCwwLTIuMS0uNC0zLjgtMS4yLTUuNy0yLjYtMTIuMS0zLjktMTkuMi0zLjktNS43LDAtMTAuMi45LTEzLjMsMi44cy00LjcsNC44LTQuNyw4LjljMCwyLjgsMSw1LjIsMyw3LjEsMiwxLjksNS43LDMuOCwxMSw1LjVsMTQuMiw0LjVjNy4yLDIuMywxMi40LDUuNSwxNS41LDkuNiwzLjEsNC4xLDQuNiw4LjgsNC42LDE0LDAsNC4zLS45LDguMi0yLjYsMTEuNi0xLjgsMy40LTQuMiw2LjQtNy4zLDguOC0zLjEsMi41LTYuOCw0LjMtMTEuMSw1LjYtNC41LDEuNC05LjIsMi4xLTE0LjMsMi4xWiIvPgogIDxnPgogICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzc4LDMxOS4zNGMtMzIuOSwyNC4zLTgwLjcsMzcuMi0xMjEuOCwzNy4yLTU3LjYsMC0xMDkuNS0yMS4zLTE0OC43LTU2LjctMy4xLTIuOC0uMy02LjYsMy40LTQuNCw0Mi40LDI0LjYsOTQuNywzOS41LDE0OC44LDM5LjUsMzYuNSwwLDc2LjYtNy42LDExMy41LTIzLjIsNS41LTIuNSwxMC4yLDMuNiw0LjgsNy42WiIvPgogICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzkxLjcsMzAzLjc0Yy00LjItNS40LTI3LjgtMi42LTM4LjUtMS4zLTMuMi40LTMuNy0yLjQtLjgtNC41LDE4LjgtMTMuMiw0OS43LTkuNCw1My4zLTUsMy42LDQuNS0xLDM1LjQtMTguNiw1MC4yLTIuNywyLjMtNS4zLDEuMS00LjEtMS45LDQtOS45LDEyLjktMzIuMiw4LjctMzcuNVoiLz4KICA8L2c+Cjwvc3ZnPg==";

const GCLOUD_LOGO =
  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTMgNTEzIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjZmJiYzA1OwogICAgICB9CgogICAgICAuY2xzLTEsIC5jbHMtMiwgLmNscy0zLCAuY2xzLTQgewogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICMzNGE4NTM7CiAgICAgIH0KCiAgICAgIC5jbHMtMyB7CiAgICAgICAgZmlsbDogIzQyODVmNDsKICAgICAgfQoKICAgICAgLmNscy00IHsKICAgICAgICBmaWxsOiAjZWE0MzM1OwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0yOTIuNDQsMjA4Ljk1aDguMTVsMjMuMjItMjMuMjIsMS4xNC05Ljg2Yy00My4yMi0zOC4xNC0xMDkuMTctMzQuMDMtMTQ3LjMyLDkuMTgtMTAuNiwxMi0xOC4yOSwyNi4yOS0yMi40OCw0MS43NCwyLjU5LTEuMDYsNS40NS0xLjIzLDguMTUtLjQ5bDQ2LjQ0LTcuNjZzMi4zNi0zLjkxLDMuNTgtMy42N2MyMC42Ni0yMi42OSw1NS40Mi0yNS4zMyw3OS4yOC02LjAzaC0uMTZaIi8+CiAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMzU2Ljg5LDIyNi43OWMtNS4zNC0xOS42Ni0xNi4zLTM3LjMyLTMxLjUzLTUwLjg0bC0zMi41OSwzMi41OWMxMy43NiwxMS4yNCwyMS42LDI4LjE4LDIxLjI3LDQ1Ljk1djUuNzhjMTYuMDIsMCwyOS4wMSwxMi45OSwyOS4wMSwyOS4wMXMtMTIuOTksMjkuMDEtMjkuMDEsMjkuMDFoLTU4LjAxbC01Ljc4LDUuODd2MzQuNzlsNS43OCw1Ljc4aDU4LjAxYzQxLjY3LjMyLDc1LjcxLTMzLjE5LDc2LjAzLTc0Ljg2LjItMjUuMjUtMTIuMjYtNDguOTMtMzMuMTgtNjMuMDhaIi8+CiAgPHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTk3LjkzLDM2NC40MWg1OC4wMXYtNDYuNDRoLTU4LjAxYy00LjEzLDAtOC4yMi0uODktMTEuOTgtMi42MWwtOC4xNSwyLjUzLTIzLjM4LDIzLjIyLTIuMDQsOC4xNWMxMy4xMSw5LjksMjkuMTEsMTUuMjMsNDUuNTUsMTUuMTVaIi8+CiAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTk3LjkzLDIxMy43NmMtNDEuNjcuMjUtNzUuMjQsMzQuMjMtNzQuOTksNzUuOS4xNCwyMy4yNywxMS4wMSw0NS4xNywyOS40NSw1OS4zNWwzMy42NS0zMy42NWMtMTQuNi02LjYtMjEuMDktMjMuNzgtMTQuNDktMzguMzgsNi42LTE0LjYsMjMuNzgtMjEuMDksMzguMzgtMTQuNDksNi40MywyLjkxLDExLjU4LDguMDYsMTQuNDksMTQuNDlsMzMuNjUtMzMuNjVjLTE0LjMyLTE4LjcyLTM2LjU2LTI5LjY2LTYwLjEzLTI5LjU4WiIvPgo8L3N2Zz4=";

export function HeroTalentOrbit({
  imgSrc = "/people/hero-girl.png",
  imgAlt = "Senior IT talent",
}: {
  imgSrc?: string;
  imgAlt?: string;
} = {}) {
  const fitRef = useRef<HTMLDivElement | null>(null);
  const scaleRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fit = fitRef.current;
    const scale = scaleRef.current;
    const hero = heroRef.current;
    if (!fit || !scale || !hero) return;

    const layers = Array.from(hero.querySelectorAll<HTMLElement>(".wto-layer"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const s = Math.min(1, fit.clientWidth / 640);
      scale.style.transform = `scale(${s})`;
      scale.style.transformOrigin = "top center";
      scale.style.marginLeft = `${(fit.clientWidth - 640 * s) / 2}px`;
      fit.style.height = `${560 * s}px`;
    };

    window.addEventListener("resize", resize);
    resize();

    const loadTimer = setTimeout(() => hero.classList.add("is-loaded"), 50);

    if (reduce)
      return () => {
        window.removeEventListener("resize", resize);
        clearTimeout(loadTimer);
      };

    let tx = 0,
      ty = 0,
      cx = 0,
      cy = 0;
    const STRENGTH = 0.18;

    const onMove = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect();
      tx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      ty = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
    };
    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseleave", onLeave);

    let raf = 0;
    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      for (const layer of layers) {
        const d = parseFloat(layer.dataset.depth || "0");
        const x = (-cx * d * STRENGTH).toFixed(2);
        const y = (-cy * d * STRENGTH).toFixed(2);
        layer.style.transform = `translate3d(${x}px,${y}px,${d}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
      clearTimeout(loadTimer);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .wto-fit {
          position: relative;
          width: 100%;
          max-width: 660px;
        }
        .wto-scale {
          width: 640px;
          height: 560px;
        }
        .wto-hero {
          position: relative;
          width: 640px;
          height: 560px;
          perspective: 1300px;
        }
        .wto-stage {
          position: absolute;
          inset: 0;
          transform-style: preserve-3d;
        }
        .wto-layer {
          position: absolute;
          opacity: 0;
          transform: translate3d(0, 0, calc(var(--depth) * 1px));
          transition: opacity 0.9s ease;
          transition-delay: var(--delay, 0s);
          will-change: transform, opacity;
        }
        .wto-hero.is-loaded .wto-layer {
          opacity: 1;
        }
        .wto-layer-inner {
          display: block;
          width: 100%;
          height: 100%;
          animation: wtoFloat var(--fdur, 6s) ease-in-out infinite;
          animation-delay: var(--fdelay, 0s);
        }
        .wto-logo-bubble {
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 14px 34px rgba(0, 0, 0, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .wto-logo-bubble img {
          width: 56%;
          height: 56%;
          object-fit: contain;
          display: block;
        }
        .wto-rings {
          left: 50%;
          margin-left: -320px;
          top: 50%;
          margin-top: -280px;
          width: 640px;
          height: 560px;
          --depth: 10;
          --delay: 0s;
          z-index: 1;
        }
        .wto-rings .wto-layer-inner {
          animation: none;
        }
        .wto-rings svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }
        .wto-rings ellipse {
          fill: none;
          stroke: #ffffff;
          stroke-width: 1.4;
          opacity: 0.13;
        }
        .wto-sap {
          top: 78px;
          left: 116px;
          width: 108px;
          height: 108px;
          --depth: 20;
          --delay: 0.15s;
          --fdur: 5.5s;
          z-index: 5;
        }
        .wto-aws {
          top: 318px;
          left: 80px;
          width: 96px;
          height: 96px;
          --depth: 50;
          --delay: 0.3s;
          --fdur: 6.5s;
          --fdelay: 0.4s;
          z-index: 6;
        }
        .wto-gcloud {
          top: 258px;
          left: 474px;
          width: 122px;
          height: 122px;
          --depth: 80;
          --delay: 0.55s;
          --fdur: 7s;
          --fdelay: 0.2s;
          z-index: 7;
        }
        .wto-stars {
          top: 86px;
          left: 498px;
          width: 60px;
          height: 106px;
          --depth: 70;
          --delay: 0.45s;
          --fdur: 8s;
          z-index: 8;
        }
        .wto-stars :global(path) {
          animation: wtoBlink 4s linear infinite;
        }
        .wto-stars :global(path:nth-child(2)) {
          animation-delay: 0.5s;
        }
        .wto-stars :global(path:nth-child(3)) {
          animation-delay: 1s;
        }
        .wto-main {
          left: 50%;
          margin-left: -186px;
          top: 130px;
          width: 372px;
          height: 430px; /* reaches stage bottom (130 + 430 = 560) */
          --depth: 100;
          --delay: 0.2s;
          --fdur: 9s;
          z-index: 10;
        }
        .wto-main .wto-layer-inner {
          animation-name: wtoFloatMain;
        }
        .wto-main img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: bottom center;
          display: block;
        }
        @keyframes wtoFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        @keyframes wtoFloatMain {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        @keyframes wtoBlink {
          0% {
            opacity: 0.2;
          }
          12.5% {
            opacity: 1;
          }
          25% {
            opacity: 0.2;
          }
          37.5% {
            opacity: 1;
          }
          50% {
            opacity: 0.2;
          }
          62.5% {
            opacity: 1;
          }
          75% {
            opacity: 0.2;
          }
          100% {
            opacity: 1;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .wto-layer-inner,
          .wto-stars :global(path) {
            animation: none !important;
          }
          .wto-layer {
            transition: opacity 0.4s ease;
          }
        }
      `}</style>

      <div className="wto-fit" ref={fitRef}>
        <div className="wto-scale" ref={scaleRef}>
          <div className="wto-hero" ref={heroRef}>
            <div className="wto-stage">
              {/* orbit rings */}
              <div className="wto-layer wto-rings" data-depth="10">
                <div className="wto-layer-inner">
                  <svg viewBox="0 0 640 560" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="330" cy="280" rx="296" ry="272" />
                    <ellipse cx="300" cy="298" rx="214" ry="206" />
                    <ellipse cx="348" cy="262" rx="146" ry="142" />
                  </svg>
                </div>
              </div>

              {/* SAP */}
              <div className="wto-layer wto-sap wto-logo-bubble" data-depth="20">
                <div
                  className="wto-layer-inner"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={SAP_LOGO} alt="SAP" />
                </div>
              </div>

              {/* AWS */}
              <div className="wto-layer wto-aws wto-logo-bubble" data-depth="50">
                <div
                  className="wto-layer-inner"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={AWS_LOGO} alt="AWS" />
                </div>
              </div>

              {/* Google Cloud */}
              <div
                className="wto-layer wto-gcloud wto-logo-bubble"
                data-depth="80"
              >
                <div
                  className="wto-layer-inner"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={GCLOUD_LOGO} alt="Google Cloud" />
                </div>
              </div>

              {/* sparkles */}
              <div className="wto-layer wto-stars" data-depth="70">
                <div className="wto-layer-inner">
                  <svg viewBox="0 0 59 106" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#FF2457"
                      d="M27.0669 26.5335C24.9615 28.5417 29.4407 28.4879 30.2175 28.565C33.7255 28.9144 37.4304 30.9717 39.9471 34.1287C42.5474 37.3909 44.9541 41.1287 46.7254 44.905C47.8966 47.4009 48.9168 49.9666 50.329 52.3428C52.4618 55.9296 52.9317 50.4831 52.2537 47.0522C50.9965 40.6933 51.9854 33.6122 54.9215 27.8332C55.6059 26.4861 56.4389 25.1686 57.6495 24.2633C58.0166 23.9894 58.4367 23.7291 58.603 23.3026C58.8778 22.5949 58.2753 21.806 57.5619 21.5449C56.8494 21.2831 56.0646 21.3754 55.3055 21.3554C52.9397 21.2919 50.7443 20.0998 48.8525 18.6771C44.693 15.5507 41.6895 11.0755 39.8692 6.20104C38.0248 1.26072 36.4126 0.77874 35.7763 0.718491C35.1401 0.65744 34.5666 1.18762 34.3633 1.79411C34.1601 2.3998 34.2404 3.06012 34.3344 3.69232C34.814 6.90554 35.5964 10.0858 35.7209 13.3328C35.9234 18.6153 33.8902 23.9741 28.541 25.8225C28.198 25.9414 27.8381 26.0475 27.5192 26.2153C27.3553 26.3021 27.2019 26.4041 27.0669 26.5335Z"
                    />
                    <path
                      fill="#3DDC84"
                      d="M0.355751 52.7272C-0.987373 54.0085 1.86998 53.974 2.36481 54.023C4.60201 54.2455 6.96533 55.5581 8.57033 57.5711C10.2292 59.6517 11.7635 62.0359 12.8937 64.4442C13.64 66.0356 14.2907 67.6727 15.192 69.1877C16.5512 71.4755 16.8516 68.002 16.4194 65.8138C15.6177 61.758 16.2475 57.2418 18.1208 53.5562C18.557 52.6967 19.0888 51.8564 19.8608 51.2797C20.0945 51.1046 20.362 50.9391 20.4681 50.6668C20.6432 50.2153 20.2592 49.7124 19.8045 49.5453C19.3499 49.3791 18.8494 49.4377 18.365 49.4248C16.8564 49.3839 15.4563 48.624 14.2497 47.717C11.5972 45.7224 9.6813 42.8691 8.52053 39.7595C7.34369 36.6089 6.31546 36.3021 5.90979 36.2627C5.50412 36.2242 5.13862 36.5624 5.00848 36.9487C4.87915 37.3359 4.93056 37.7569 4.99081 38.1601C5.29687 40.2093 5.79572 42.2377 5.87525 44.3086C6.00378 47.6769 4.70725 51.0949 1.29642 52.2742C1.07712 52.3497 0.848176 52.4172 0.644137 52.5248C0.539707 52.5794 0.441704 52.6453 0.355751 52.7272Z"
                    />
                    <path
                      fill="#FF6B2B"
                      d="M38.3118 88.2736C36.9687 89.5549 39.826 89.5203 40.3209 89.5693C42.5581 89.7919 44.9214 91.1045 46.5264 93.1175C48.1852 95.1981 49.7195 97.5823 50.8498 99.9906C51.596 101.582 52.2467 103.219 53.148 104.734C54.508 107.022 54.8076 103.548 54.3755 101.36C53.5738 97.3044 54.2044 92.7882 56.0769 89.1026C56.5131 88.2431 57.0448 87.4028 57.8168 86.8261C58.0506 86.6509 58.3189 86.4855 58.4241 86.2131C58.5992 85.7617 58.2153 85.2588 57.7606 85.0917C57.3059 84.9246 56.8055 84.9841 56.3219 84.9712C54.8125 84.9303 53.4123 84.1703 52.2057 83.2634C49.5532 81.2688 47.6374 78.4147 46.4766 75.3059C45.2997 72.1553 44.2715 71.8485 43.8658 71.8091C43.4602 71.7705 43.0947 72.1087 42.9645 72.4951C42.8352 72.8815 42.8866 73.3032 42.9469 73.7065C43.2529 75.7557 43.7518 77.7841 43.8313 79.8542C43.9598 83.2232 42.6633 86.6413 39.2525 87.8206C39.0332 87.8961 38.8042 87.9635 38.6002 88.0712C38.4958 88.1258 38.3978 88.1917 38.3118 88.2736Z"
                    />
                  </svg>
                </div>
              </div>

              {/* main person */}
              <div className="wto-layer wto-main" data-depth="100">
                <div className="wto-layer-inner">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={imgSrc} alt={imgAlt} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
