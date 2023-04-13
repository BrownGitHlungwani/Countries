# Final Project - Testing Your knowledge Of HTML, CSS and JS from Module 2 to 14.

using population data found on this repository - : [population data in json](https://github.com/samayo/country-json/blob/master/src/country-by-population.json). Copy the data and create a `data.json` file in the root folder.

create an application that uses web workers to pocess the data and give a report based on the following criteria.
1. Load the data from `data.json` file using form file upload - allow only `json` file format  or extension.
  - send the data to a web worker for processing
2. find populus (most populated) country.  

3. find the least populated country the data should conform to the object data given in the hint below.

4. find the median populated country - the country whose population stands between most populated and least populated.

5. create or display the data in bars (some sort of barchart - it does not have to be a perfect barchart) using your svg skills.

6. make sure that the data is processed once and saved to a storage location and retrieve thet data at later stages.

7. retrieve  the data stored in the browser and send it to the api (the rest api found in this project at `./server` folder.). only sending the data nothing else.

>**HINT**: Your data recieved from the web worker should look and be grouped  like this:
```bash
{
mostPopulates: {countryname: '', population: '', percentage: 0},
leastPopulated: {countryname: '', population: '', percentage: 0},
medianPopulates: {countryname: '', population: '', percentage: 0}
}
