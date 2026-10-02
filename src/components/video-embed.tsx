"use client";

import { useEffect } from "react";

function youtubeId(href: string): string | null {
  try {
    const url = new URL(href, window.location.origin);
    if (url.hostname === "youtu.be") {
      return url.pathname.slice(1) || null;
    }
    if (url.hostname.endsWith("youtube.com")) {
      if (url.pathname.startsWith("/embed/") || url.pathname.startsWith("/shorts/")) {
        return url.pathname.split("/")[2] || null;
      }
      return url.searchParams.get("v");
    }
  } catch {
    return null;
  }
  return null;
}

export function VideoEmbed() {
  useEffect(() => {
    function wire() {
      const links = document.querySelectorAll<HTMLAnchorElement>(
        '.prose a[href*="youtube.com/watch"], .prose a[href*="youtu.be/"], .prose a[href*="youtube.com/shorts/"]'
      );
      links.forEach((link) => {
        if (link.dataset.videoWired) return;
        const image = link.querySelector("img");
        if (!image) return;
        const id = youtubeId(link.href);
        if (!id) return;
        link.dataset.videoWired = "1";
        link.classList.add("yt-lite");
        link.addEventListener("click", (event) => {
          event.preventDefault();
          const iframe = document.createElement("iframe");
          iframe.className = "yt-frame";
          iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
          iframe.title = image.alt || "Vídeo";
          iframe.setAttribute(
            "allow",
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          );
          iframe.setAttribute("allowfullscreen", "");
          link.replaceWith(iframe);
        });
      });
    }
    wire();
    document.addEventListener("nextjs:routeChangeComplete", wire);
    return () => document.removeEventListener("nextjs:routeChangeComplete", wire);
  }, []);

  return null;
}
