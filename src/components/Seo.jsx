import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const SEO = ({ title }) => {
    return (
        <>
            <meta charSet="utf-8" />
            <Helmet>
                <title>BubblebitX | {title}</title>
            </Helmet>
            <meta name="robots" content="noindex, follow" />
            <meta name="description" content="" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
        </>
    );
};
SEO.propTypes = {
    title: PropTypes.string,
};

export default SEO;
