const { default: fetch } = require("node-fetch");

describe("My apis", () => {
  let data = fetch("/api/articles/How-to-learn-React");

  it("Should brind back the how to learn React article", () => {
    expect(data).toEqual({
      _id: "6406fcc4803344dac3b442b7",
      articleName: "How-to-learn-React",
      articleAuthor: "Mark",
      articleDetails: {
        articleContent: ["Lorem Ipsum 1", "Lorem Ipsum 2"],
        articleUpvote: 0,
        articleComments: [
          {
            commentAuthor: "Jean",
            comment: "waw",
          },
        ],
        articleHeader:
          "Bored to learn React the slow way ? here is how to learn it faster",
      },
    });
  });
});
