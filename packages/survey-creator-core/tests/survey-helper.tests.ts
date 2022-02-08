import { SurveyHelper } from "../src/survey-helper";

test("Test sortItems", (): any => {
  const items = [{ text: "q 1" }, { text: "q 20" }, { text: "q 2" }, { text: "q 200" }, { text: "q 11" }, { text: "q 2000" }, { text: "q 5" }, { text: "q 21" }];
  SurveyHelper.sortItems(items);
  expect(items[0].text).toEqual("q 1");
  expect(items[1].text).toEqual("q 2");
  expect(items[2].text).toEqual("q 5");
  expect(items[3].text).toEqual("q 11");
  expect(items[4].text).toEqual("q 20");
  expect(items[5].text).toEqual("q 21");
  expect(items[6].text).toEqual("q 200");
  expect(items[7].text).toEqual("q 2000");
});
test("Test sortItems2", (): any => {
  const items = [{ text: "abc1" }, { text: "abc10" }, { text: "abc100" }, { text: "abc200" }, { text: "abc20" }];
  SurveyHelper.sortItems(items);
  expect(items[0].text).toEqual("abc1");
  expect(items[1].text).toEqual("abc10");
  expect(items[2].text).toEqual("abc20");
  expect(items[3].text).toEqual("abc100");
  expect(items[4].text).toEqual("abc200");
});
test("Test sortItems3", (): any => {
  const items = [{ text: "abc1.A" }, { text: "abc2.B" }, { text: "abc11.C" }, { text: "abc3" }];
  SurveyHelper.sortItems(items);
  expect(items[0].text).toEqual("abc1.A");
  expect(items[1].text).toEqual("abc2.B");
  expect(items[2].text).toEqual("abc3");
  expect(items[3].text).toEqual("abc11.C");
});
test("Test sortItems4", (): any => {
  const items = [{ text: "question1" }, { text: "question2" }, { text: "question3" }, { text: "question4" }, { text: "question5" },
    { text: "question6" }, { text: "question7" }, { text: "question8" }, { text: "question9" }, { text: "question10" },
    { text: "question11" }, { text: "question12" }, { text: "question13" }, { text: "question14" }, { text: "question15" },
    { text: "question11.A" }, { text: "question14.A" }, { text: "question14.B" }, { text: "question11.B" }, { text: "question11.C" }];
  SurveyHelper.sortItems(items);
  expect(items[0].text).toEqual("question1");
  expect(items[1].text).toEqual("question2");
  expect(items[2].text).toEqual("question3");
  expect(items[3].text).toEqual("question4");
  expect(items[4].text).toEqual("question5");
  expect(items[5].text).toEqual("question6");
  expect(items[6].text).toEqual("question7");
  expect(items[7].text).toEqual("question8");
  expect(items[8].text).toEqual("question9");
  expect(items[9].text).toEqual("question10");
  expect(items[10].text).toEqual("question11");
  expect(items[11].text).toEqual("question11.A");
  expect(items[12].text).toEqual("question11.B");
  expect(items[13].text).toEqual("question11.C");
  expect(items[14].text).toEqual("question12");
  expect(items[15].text).toEqual("question13");
  expect(items[16].text).toEqual("question14");
  expect(items[17].text).toEqual("question14.A");
  expect(items[18].text).toEqual("question14.B");
  expect(items[19].text).toEqual("question15");
});