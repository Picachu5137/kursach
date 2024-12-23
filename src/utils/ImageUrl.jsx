export const getImageUrl = (imagePath) => {
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    if (imagePath) {
        return imagePath.startsWith("http") ? imagePath : `${API_BASE_URL}${imagePath}`;
    } else {
        return "/";
    }
};
