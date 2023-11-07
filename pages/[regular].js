import NotFound from "@layouts/404";
import About from "@layouts/About";
import Base from "@layouts/Baseof";
import Certificate from "@layouts/Certificate";
import Contact from "@layouts/Contact";
import Default from "@layouts/Default";
import Domesticpackages from "@layouts/Domesticpackages";
import Internationalpackages from "@layouts/Internationalpackages";
import Act from "@layouts/components/Act";
import Epfo from "@layouts/components/Epfo";
import Esi from "@layouts/components/Esi";
import PrivacyPolicy from "@layouts/components/PrivacyPolicy";
import TermsandConditions from "@layouts/components/TermsandConditions";
import Ur from "@layouts/components/Ur";
import Services from "@layouts/partials/Services";
import { getRegularPage, getSinglePage } from "@lib/contentParser";

// for all regular pages
const RegularPages = ({ data }) => {
  const { title, meta_title, description, image, noindex, canonical, layout } =
    data.frontmatter;
  const { content } = data;

  return (
    <Base
      title={title}
      description={description ? description : content.slice(0, 120)}
      meta_title={meta_title}
      image={image}
      noindex={noindex}
      canonical={canonical}
    >
      {layout === "404" ? (
        <NotFound data={data} />
      ) : layout === "about" ? (
        <About data={data} />
      ) : layout === "contact" ? (
        <Contact data={data} />
      ) : layout === "domesticpackages" ? (
         <Domesticpackages data={data}/>
      ) : layout === "internationalpackages" ? (
        <Internationalpackages data={data}/>
     ) : layout === "services" ? (
      <Services data={data}/>
      ) : layout === "privacypolicy" ? (
        <PrivacyPolicy data={data}/>
        ) : layout === "termsandconditions" ? (
          <TermsandConditions data={data}/>
          ) : layout === "certificate" ? (
            <Certificate data={data}/>
            ) : layout === "esi" ? (
              <Esi data={data}/>
              ) : layout === "act" ? (
                <Act data={data}/>
                ) : layout === "epfo" ? (
                  <Epfo data={data}/>
                  ) : layout === "ur" ? (
                    <Ur data={data}/>
                    ) :

      (
        <Default data={data} />
      )}
    </Base>
  );
};
export default RegularPages;

// for regular page routes
export const getStaticPaths = async () => {
  const slugs = getSinglePage("content");
  const paths = slugs.map((item) => ({
    params: {
      regular: item.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

// for regular page data
export const getStaticProps = async ({ params }) => {
  const { regular } = params;
  const allPages = await getRegularPage(regular);

  return {
    props: {
      slug: regular,
      data: allPages,
    },
  };
};
