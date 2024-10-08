import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import Deatail from "../components/Deatail";
import ExercisesVideos from "../components/ExercisesVideos";
import SimilarExercies from "../components/SimilarExercies";
import { fetchData, exerciesOptions, youtubeOptions } from "../utils/fetchData";

const ExerciesDeatails = () => {
  const { id } = useParams();
  const [exerciesDeatails, setExerciesDeatails] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);

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
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciesOptions
      );
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciesOptions
      );
      setEquipmentExercises(equimentExercisesData);
    };

    fetchExercisesData();
  }, [id]);
  if (!exerciesDeatails) return <div>No Data</div>;
  return (
    <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
      <Deatail exerciesDeatails={exerciesDeatails} />
      <ExercisesVideos exerciseVideos={exerciseVideos} name={exerciesDeatails.name} />
      <SimilarExercies targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  );
};

export default ExerciesDeatails;
