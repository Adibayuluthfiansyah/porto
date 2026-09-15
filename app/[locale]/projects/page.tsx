"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import IdeShell from "@/components/ide/IdeShell";

interface ProjectItem {
  id: string;
  title: string;
  type: string;
  description: string;
  techStack: string[];
}

// Project links and images mapping
const projectLinks: Record<string, string> = {
  "project-1": "https://github.com/Adibayuluthfiansyah/shop-frontend",
  "project-2": "https://github.com/DinsosKubuRaya/DinsosFrontend",
  "project-3": "https://o7ong.me/",
  "project-4": "https://cangkir.tech/id",
  "project-5": "https://github.com/physicshub/physicshub.github.io/pull/203",
};

const projectImages: Record<string, string[]> = {
  "project-1": ["/shop1.webp"],
  "project-2": ["/dashboard-dinsos.webp", "/lp-dinsos.webp"],
  "project-3": ["/inv-lp.webp", "/inv-lp2.webp", "/inv-lp3.webp"],
  "project-4": ["/cangkir1.webp", "/cangkir2.webp", "/cangkir3.webp"],
  "project-5": ["/opensource3.webp", "/opensource2.webp", "/opensource1.webp"],
};

function ProjectCard({ project }: { project: ProjectItem }) {
  const t = useTranslations("projects");
  const [imgIndex, setImgIndex] = useState(0);
  const images = projectImages[project.id] || [];
  const link = projectLinks[project.id] || "#";

  const nextImg = () => setImgIndex((prev) => (prev + 1) % images.length);
  const prevImg = () => setImgIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <article className="bg-surface-container-lowest border border-outline-variant/40 hover:border-outline transition-colors">
      <div className="px-space-md py-space-sm bg-surface-container flex items-center gap-space-xs">
        <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-secondary">
          folder
        </span>
        <span className="font-code-inline text-code-inline text-on-surface-variant">
          ~/projects/{project.id}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg p-space-md md:p-space-lg">
        <div className="relative border border-outline-variant/40 bg-surface">
          <div className="aspect-video relative">
            <Image
              src={images[imgIndex]}
              alt={`${project.title} - Slide ${imgIndex + 1}`}
              fill
              priority={project.id === "project-1" && imgIndex === 0}
              loading={project.id === "project-1" && imgIndex === 0 ? undefined : "lazy"}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              className="object-contain"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImg}
                  aria-label={t("prevImage")}
                  className="absolute left-2 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] flex items-center justify-center bg-surface-container-lowest/80 text-on-surface hover:text-secondary transition-colors"
                >
                  <span aria-hidden="true" className="material-symbols-outlined text-[20px]">
                    chevron_left
                  </span>
                </button>
                <button
                  onClick={nextImg}
                  aria-label={t("nextImage")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] flex items-center justify-center bg-surface-container-lowest/80 text-on-surface hover:text-secondary transition-colors"
                >
                  <span aria-hidden="true" className="material-symbols-outlined text-[20px]">
                    chevron_right
                  </span>
                </button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-space-xs bg-surface-container-lowest/80 px-space-sm py-space-xs">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setImgIndex(idx)}
                      aria-label={t("goToImage", { number: idx + 1 })}
                      aria-current={idx === imgIndex ? "true" : undefined}
                      className={`h-1.5 transition-all ${
                        idx === imgIndex ? "bg-secondary w-6" : "bg-outline w-1.5"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="font-label-md text-label-md text-secondary tracking-widest uppercase mb-space-xs">
            {project.type}
          </p>
          <h3 className="font-headline-md text-headline-md text-on-surface font-semibold mb-space-sm">
            {project.title}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-space-xs mb-space-md">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-space-xs py-0.5 font-label-md text-label-md border border-outline-variant/40 text-on-surface-variant"
              >
                {tech}
              </span>
            ))}
          </div>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-space-xs font-label-lg text-label-lg text-primary hover:text-secondary transition-colors w-fit min-h-[44px]"
          >
            {t("viewProject")}
            <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
              arrow_outward
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function Project() {
  const t = useTranslations("projects");
  const projects: ProjectItem[] = t.raw("items");

  return (
    <IdeShell>
    <section id="projects" className="px-space-md md:px-space-xl py-space-md md:py-space-lg">
      <div className="max-w-5xl mx-auto flex flex-col gap-space-lg">
        <div>
          <p className="font-label-lg text-label-lg text-primary tracking-wider uppercase mb-space-xs">
            {t("label")}
          </p>
          <h1 className="font-headline-lg text-headline-lg md:text-headline-xl text-on-surface font-bold">
            {t("heading1")} {t("heading2")}
          </h1>
        </div>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
    </IdeShell>
  );
}
