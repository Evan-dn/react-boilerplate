/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

const descriptionHomePage = [
  ` L'Univers cinématographique Marvel (Marvel Cinematic Universe en anglais, abrégé en MCU) est une franchise cinématographique produite par Marvel Studios mettant en scène des personnages de bandes dessinées de l'éditeur Marvel Comics. Marvel Studios est la propriété de The Walt Disney Company.

Les films qui font partie de cet univers partagé sont, à l'origine, ceux mettant en vedette Les Avengers, un groupe de super-héros comprenant Iron Man, Hulk, Thor, Black Widow, Hawkeye et Captain America. C'est le film Iron Man, sorti en 2008, qui lance cet univers1. Le film Les Gardiens de la Galaxie, sorti en août 2014, est le premier dans lequel Les Avengers n'apparaissent pas, et presque tous se regroupent en 2018 et 2019 dans Avengers : Infinity War suivi par Avengers: Endgame, qui devient le film le plus lucratif de l'histoire du cinéma mondial avec des recettes excédant les 2,798 milliards de dollars.

La création d'un univers filmique s'apparente à ce que proposait Stan Lee dans les comics, où les personnages peuvent apparaître dans d'autres séries que la leur. Avec le concept d'univers étendu, les productions cinématographiques Marvel ont mis en scène, sous la houlette du producteur Kevin Feige, une vaste galerie de personnages et participé à rendre davantage populaire le genre de films de super-héros2.

Depuis 2013, avec la création de la série Marvel : Les Agents du SHIELD, l'univers étendu est aussi présent à la télévision, avec dix séries diffusées sur différentes plate-formes.

En juillet 2019, vingt-trois films sont sortis en salle, cumulant plus de 25,585 milliards de dollars de recettes mondiales et constituant en partie les trois premières « phases » de la construction de cet univers, avec une dernière production, Avengers: Endgame qui conclut le premier « cycle » lié aux six Pierres d'Infinité et à Thanos qui ont été le fil directeur de nombreux films de ces trois premières phases du MCU3. Alors que la phase III s’est officiellement achevée avec Spider-Man: Far From Home, un nouveau cycle s'ouvrira ensuite avec le début de la phase IV, en commençant par le film Black Widow dont la sortie est prévue en mai 2020. Par ailleurs, le lancement de la plateforme Disney+ à partir de 2019 va permettre aux Marvel Studios de partager et de croiser les nouveaux contenus entre le cinéma et le streaming.`,
];

export default defineMessages({
  startProjectHeader: {
    id: `${scope}.start_project.header`,
    defaultMessage: 'Start your next react project in seconds',
  },
  startProjectMessage: {
    id: `${scope}.start_project.message`,
    defaultMessage:
      'A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices',
  },
  trymeHeader: {
    id: `${scope}.tryme.header`,
    defaultMessage: 'Try me!',
  },
  trymeMessage: {
    id: `${scope}.tryme.message`,
    defaultMessage: 'Show Github repositories by',
  },
  trymeAtPrefix: {
    id: `${scope}.tryme.atPrefix`,
    defaultMessage: '@',
  },
  detailHomePage: {
    id: `${scope}.detailHomePage`,
    defaultMessage: `${descriptionHomePage[0]}`,
  },
});
