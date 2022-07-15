export const onCreateWebpackConfig = ({ stage, loaders, actions }: any) => {
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /leaflet/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
