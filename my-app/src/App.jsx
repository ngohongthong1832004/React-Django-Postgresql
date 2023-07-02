import chalk from 'chalk';
import gradient from 'gradient-string';
import tinycolor from 'tinycolor2';

import Header from "./components/header";
import Search from "./components/search";
import Content from "./content";

function App() {
  console.log(`%cThis is the simple Website with :
Front-end : React function component 
Back-end : Django restful API 
Database : PostgresSql
With all of my love <3 <3 <3`, "color: #00ff99; font-size: 20px; background-color: black; padding: 10px; border: 5px solid red; border-radius: 1rem; margin: 10px;");

  let threetrees = gradient('orange', 'yellow').multiline([
    "                          /\\                                          /\\                                          /\\                                   ",
     "                         /  \\                                        /  \\                                        /  \\                                ",
     "                        /    \\                                      /    \\                                      /    \\                               ",
     "                       /      \\                                    /      \\                                    /      \\                             ",
     "                      /        \\                                  /        \\                                  /        \\                             ",
     "                     /___/  \\___\\                                /___/  \\___\\                                /___/  \\___\\                              ",
     "                        /    \\                                      /    \\                                      /    \\                                 ",
     "                       /      \\                                    /      \\                                    /      \\                                ",
     "                      /        \\                                  /        \\                                  /        \\                              ",
     "                     /          \\                                /          \\                                /          \\                              ",
     "                    /            \\                              /            \\                              /            \\                             ",                                       
     "                   /              \\                            /              \\                            /              \\                            ",                                         
     "                  /      /  \\      \\                          /      /  \\      \\                          /      /  \\      \\                             ",
     "                 /______/    \\______\\                        /______/    \\______\\                        /______/    \\______\\                          ",
     "                       /      \\                                    /      \\                                    /      \\                                ",
     "                      /        \\                                  /        \\                                  /        \\                             ",
     "                     /          \\                                /          \\                                /          \\                               ",
     "                    /            \\                              /            \\                              /            \\                             ",
     "                   /              \\                            /              \\                            /              \\                            ",
     "                  /                \\                          /                \\                          /                \\                            ",
     "                 /                  \\                        /                  \\                        /                  \\                          ",
     "                /                    \\                      /                    \\                      /                    \\                         ",
     "               /                      \\                    /                      \\                    /                      \\                        ",
     "              /                        \\                  /                        \\                  /                        \\                       ",
     "             /_________       __________\\                /_________       __________\\                /_________       __________\\                       ",
     "                      |       |                                   |       |                                   |       |                              ",
     "                      |       |                                   |       |                                   |       |                              ",
     "                      |       |                                   |       |                                   |       |                              ",
     "                      |       |                                   |       |                                   |       |                              ",
     "                      |       |                                   |       |                                   |       |                              ",
     "                      |_______|                                   |_______|                                   |_______|                              ",
     "                                                                                                                                                   ",
     "                                                                                                                                                   ",
  ].join('\n'));
  console.log(threetrees);

  
  return (
    <>
      <Header />

      <Search />

      <Content />

    </>
  );
}

export default App;
