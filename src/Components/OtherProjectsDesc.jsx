import FreeCommentAppCardStyle from "../OtherProjects/FreeComment/FreeCommentAppCardStyle";
import WeatherAppCardStyle from "../OtherProjects/WeatherApps/WeatherAppCardStyle";
import MovieAppCardStyle from "../OtherProjects/MovieApps/MovieAppCardStyle";

export function createProjectCards(FreeCommentApp, WeatherApp, MovieApp) {
  return [
    {
      id: 1,
      control: FreeCommentApp,
      component: (
        <FreeCommentAppCardStyle freeCommentControl={FreeCommentApp} />
      ),
    },
    {
      id: 2,
      control: WeatherApp,
      component: <WeatherAppCardStyle weatherAppControl={WeatherApp} />,
    },
    {
      id: 3,
      control: MovieApp,
      component: <MovieAppCardStyle movieAppControl={MovieApp} />,
    },
  ];
}
