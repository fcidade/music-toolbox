import { useAudio } from "@/hooks/useAudio";

export const useMetronomeAudio = () => {
    const { play, setVolume } = useAudio('/audios/metronome/Click1.wav');
    const beatObserver = (beat: number) => {
        if (beat === 0) {
            setVolume(0.8)
        } else {
            setVolume(0.4)
        }
        play();
    };
    return {
        play,
        beatObserver,
    };
};
