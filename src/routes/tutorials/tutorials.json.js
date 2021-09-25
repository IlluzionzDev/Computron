// Provide a tutorials.json endpoint to get the list of all tutorials from md files
// GET /tutorials/tutorials.json
export const get = async () => {
    let tutorials = await Promise.all(
      Object.entries(import.meta.glob('./*.md')).map(async ([path, page]) => {
        const { metadata } = await page();
        const slug = path.split('/').pop().split('.').shift();
        return { ...metadata, slug };
      })
    );
  
    return {
      status: 200,
      body: { tutorials },
    };
  };