import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import Deatail from "../components/Deatail";
import ExercisesVideos from "../components/ExercisesVideos";
import SimilarExercies from "../components/SimilarExercies";
import { fetchData ,exerciesOptions} from "../utils/fetchData";

const ExerciesDeatails = () => {
  const { id } = useParams();
  const [exerciesDeatails, setExerciesDeatails] = useState({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciesOptions
      );
      setExerciesDeatails(exerciseDetailData);

      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
        youtubeOptions
      );
      setExerciesDeatails(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciesOptions
      );
      setExerciesDeatails(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciesOptions
      );
      setExerciesDeatails(equimentExercisesData);
    };

    fetchExercisesData();
  }, []);
  return (
    <Box>
      <Deatail exerciesDeatails={exerciesDeatails} />
      <ExercisesVideos />
      <SimilarExercies />
    </Box>
  );
};

export default ExerciesDeatails;
