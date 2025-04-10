import { useEffect, useRef, useState } from "react";
import AudioPlayer from "../utils/AudioPlayer";

function TypingForm() {
    const [text, setText] = useState("");
    const timestamps = useRef([]);      // holds timestamp of each keystroke
    const [typingSpeed, setTypingSpeed] = useState(0);
    const [playbackSpeed, setPlaybackSpeed] = useState(0);
    const handleTyping = (e) => {
        const now = Date.now();         // current timestamp
        timestamps.current.push(now);
        setText(e.target.value);
    }
    useEffect(() => {
        const interval = setInterval(() => {
            const now = Date.now();
            // calculate only for last 3 seconds
            timestamps.current = timestamps.current.filter((t) => now-t <= 3000);
            const kps = (timestamps.current.length/3);
            const roundedKps = +kps.toFixed(2);
            setTypingSpeed(roundedKps);
            const newSpeed = Math.max(0.5, Math.min(2.0, kps / 6));
            const roundedSpeed = +newSpeed.toFixed(2);
            AudioPlayer.setSpeed(roundedSpeed);
            setPlaybackSpeed(roundedSpeed);
        }, 1000);

        // Cleanup: Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);
    return (
        <>
        <div className="card-container">
            <div className="card shadow p-4 custom-card" >
              <form>
                <textarea 
                className="form-control form-control-lg mb-3"
                placeholder="Start Typing..."
                value={text}
                onChange={handleTyping}
                rows={5}>
                </textarea>
                <div className="d-flex flex-column gap-1 rounded shadow-sm mb-3 bg-light-subtle p-3">
                  <p><strong>Typing Speed:</strong> {typingSpeed} kps</p>
                  <p><strong>Playback Speed:</strong> {playbackSpeed} x</p>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-outline-success mx-2" type="button" onClick={() => AudioPlayer.play()}>Play</button>
                  <button className="btn btn-outline-danger mx-2" type="button" onClick={() => AudioPlayer.pause()}>Pause</button>
                </div>
              </form>
            </div>
        </div>
        </>
    )
}

export default TypingForm;