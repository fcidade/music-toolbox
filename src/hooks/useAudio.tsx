import { useEffect, useRef, useState } from "react";

export type UseAudioReturn = {
    play(): void
    setVolume(volume: number): void
}

export const useAudio = (src: string, { defaultVolume = 1, playbackRate = 1 } = {}): UseAudioReturn => {
    const audio = useRef(new Audio(src));
    const [volume, setVolume] = useState(defaultVolume)

    useEffect(() => {
        audio.current.volume = volume;
    }, [volume]);

    useEffect(() => {
        audio.current.playbackRate = playbackRate;
    }, [playbackRate]);

    const play = () => {
        audio.current.currentTime = 0
        audio.current.play()
    }

    return {
        play,
        setVolume: (volume) => setVolume(volume),
    };
};
