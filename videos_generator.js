
// generador_videos

contenedorInfo2.innerHTML = `

				<div class="info-container-video desplegar_info2" id="${el_json.id_container_video}">
					<div class="name-pj">
						<i class="fa-solid fa-spinner icono-video-temp"></i>
						<p>${el_json.nombre_video}</p>
						<i class="fa-solid fa-spinner icono-video-temp"></i>
					</div>
					<div class="info-pj">
						<div class="panel-der">
							<div class="container-botones">
								<div class="boton-play-pausa-video">
									<i class="fa-solid fa-play play-btn-video"></i>
									<i class="fa-solid fa-pause hide pause-btn-video"></i>
								</div>
								<div class="boton-reset-video">
									<i class="fa-solid fa-rotate-right reset-btn-video"></i>
								</div>
								<div class="boton-fullscreen-video">
									<i class="fa-solid fa-expand screen-btn-video"></i>
								</div>
							</div>
						</div>
						<div class="panel-medio">
							<video poster="./imagenes/img_loading_video.png" class="video-op-temp videos_todos">
								<source src="${el_json.src_video}" type="video/mp4">
							</video>
							<div class="tiempo-transcurrido_video">
								<span  class="current-time_video tiempo00_video">00:00</span>
								<div class="progress-container-video">
									<section class="progressCon_Video"></section>	
								</div>
								<div class="total-duration_video">${el_json.final_duration}</div>
							</div>
						</div>
						<div class="panel-izq">
							<div class="container-volumen-video">
								<input type="range" min="0" max="100" value="100" class="volume-slider-video">
								<div class="container_volume-btn-video">
									<i class="fa-solid fa-volume-high volume-btn-video"></i>
									<i class="fa-solid fa-volume-xmark volume-mute-video hide"></i>
								</div>
							</div>
						</div>
					</div>
					<div class="boton-pj">
						<div class="img-close-info2 cerrar_info2"></div>
					</div>
				</div>

				`



videos_json = [
    {
        "nombre_video": "Opening - Arco Aincrad",
        "id_container_video": "aincradserie",
        "src_video": "videos/temp-1/aincrad/opening/Sao-Crossing Field-Opening.mp4",
        "final_duration": "01:29"
    },
    {
        "nombre_video": "Opening - Arco Aincrad",
        "id_container_video": "clipcrosing",
        "src_video": "videos/temp-1/aincrad/opening/Sao-Crossing Field-Opening-Clip.mp4",
        "final_duration": "04:07"
    },
    {
        "nombre_video": "Opening - Arco Alfheim",
        "id_container_video": "alfheimserie",
        "src_video": "videos/temp-1/alfheim/opening/Sao-Innocence-Opening.mp4",
        "final_duration": "01:31"
    },
    {
        "nombre_video": "Opening - Arco Alfheim",
        "id_container_video": "clipinnocense",
        "src_video": "videos/temp-1/alfheim/opening/Sao-Innocence-Opening-Clip.mp4",
        "final_duration": "05:02"
    },
    {
        "nombre_video": "Ending - Arco Aincrad",
        "id_container_video": "aincradending",
        "src_video": "videos/temp-1/aincrad/ending/Sao-Yomesekai-Ending.mp4",
        "final_duration": "01:30"
    },
    {
        "nombre_video": "Ending - Arco Aincrad",
        "id_container_video": "clipyumesekai",
        "src_video": "videos/temp-1/aincrad/ending/Sao-Yomesekai-Ending-Clip.mp4",
        "final_duration": "04:46"
    },
    {
        "nombre_video": "Ending - Arco Alfheim",
        "id_container_video": "alfheimending",
        "src_video": "videos/temp-1/alfheim/ending/Sao-Overfly-Ending.mp4",
        "final_duration": "01:31"
    },
    {
        "nombre_video": "Ending - Arco Alfheim",
        "id_container_video": "clipoverfly",
        "src_video": "videos/temp-1/alfheim/ending/Sao-Overfly-Ending-Clip.mp4",
        "final_duration": "04:26"
    },
    {
        "nombre_video": "Opening - Arco Gun Gale Online",
        "id_container_video": "ggoserie",
        "src_video": "videos/temp-2/ggo/opening/Sao-Ignite-Opening.mp4",
        "final_duration": "01:31"
    },
    {
        "nombre_video": "Opening - Arco Gun Gale Online",
        "id_container_video": "clipignite",
        "src_video": "videos/temp-2/ggo/opening/Sao-Ignite-Opening-Clip.mp4",
        "final_duration": "04:08"
    },
    {
        "nombre_video": "Opening - Arco Calibur",
        "id_container_video": "caliburserie",
        "src_video": "videos/temp-2/calibur/opening/Sao-Courage-Opening.mp4",
        "final_duration": "01:31"
    },
    {
        "nombre_video": "Opening - Arco Mother`s Rosario",
        "id_container_video": "rosarioserie",
        "src_video": "videos/temp-2/mother/opening/Sao-Courage-Opening.mp4",
        "final_duration": "01:31"
    },
    {
        "nombre_video": "Opening - Arco Calibur",
        "id_container_video": "clipcourage",
        "src_video": "videos/temp-2/calibur/opening/Sao-Courage-Opening-Clip.mp4",
        "final_duration": "04:24"
    },
    {
        "nombre_video": "Ending - Arco Gun Gale Online",
        "id_container_video": "ggoending",
        "src_video": "videos/temp-2/ggo/ending/Sao-Startear-Ending.mp4",
        "final_duration": "01:31"
    },
    {
        "nombre_video": "Ending - Arco Gun Gale Online",
        "id_container_video": "clipstartear",
        "src_video": "videos/temp-2/ggo/ending/Sao-Startear-Opening-Clip.mp4",
        "final_duration": "05:05"
    },
    {
        "nombre_video": "Ending - Arco Calibur",
        "id_container_video": "caliburending",
        "src_video": "videos/temp-2/calibur/ending/Sao-Nomoretimemachine-Ending.mp4",
        "final_duration": "01:31"
    },
    {
        "nombre_video": "Ending - Arco Mother`s Rosario",
        "id_container_video": "rosarioending",
        "src_video": "videos/temp-2/mother/ending/Sao-Shirushi-Ending.mp4",
        "final_duration": "01:43"
    },
    {
        "nombre_video": "Ending - Arco Calibur",
        "id_container_video": "clipnomoretime",
        "src_video": "videos/temp-2/calibur/ending/Sao-Nomoretimemachine-Ending-Clip.mp4",
        "final_duration": "01:51"
    },
    {
        "nombre_video": "Ending - Arco Mother`s Rosario",
        "id_container_video": "clipnomoretime2",
        "src_video": "videos/temp-2/mother/ending/Sao-Shirushi-Ending-Clip.mp4",
        "final_duration": "04:50"
    },
    {
        "nombre_video": "Video - Film Ordinal Scale",
        "id_container_video": "ordinalserie",
        "src_video": "videos/ordinal/Lisa-Catch The Moment-Video.mp4",
        "final_duration": "04:38"
    },
    {
        "nombre_video": "Video Clip - Film Ordinal Scale",
        "id_container_video": "clipcatch",
        "src_video": "videos/ordinal/Lisa-Catch The Moment-Clip.mp4",
        "final_duration": "04:45"
    },
    {
        "nombre_video": "Opening - Arco Alicization (Part 1)",
        "id_container_video": "alicizationseriep1",
        "src_video": "videos/alicization/opening/1/Sao-Adamas-Opening.mp4",
        "final_duration": "01:33"
    },
    {
        "nombre_video": "Opening - Arco Alicization (Part 1)",
        "id_container_video": "clipadamas",
        "src_video": "videos/alicization/opening/1/Sao-Adamas-Opening-Clip.mp4",
        "final_duration": "03:40"
    },
    {
        "nombre_video": "Opening - Arco Alicization (Part 2)",
        "id_container_video": "alicizationseriep2",
        "src_video": "videos/alicization/opening/2/Sao-Resister-Opening.mp4",
        "final_duration": "01:31"
    },
    {
        "nombre_video": "Opening - Arco Alicization (Part 2)",
        "id_container_video": "clipresister",
        "src_video": "videos/alicization/opening/2/Sao-Resister-Opening-Clip.mp4",
        "final_duration": "03:54"
    },
    {
        "nombre_video": "Ending - Arco Alicization (Part 1)",
        "id_container_video": "alicizationendingp1",
        "src_video": "videos/alicization/ending/1/Sao-Airisu-Ending.mp4",
        "final_duration": "01:27"
    },
    {
        "nombre_video": "Ending - Arco Alicization (Part 1)",
        "id_container_video": "clipiris",
        "src_video": "videos/alicization/ending/1/Sao-Airisu-Ending-Clip.mp4",
        "final_duration": "04:08"
    },
    {
        "nombre_video": "Ending - Arco Alicization (Part 2)",
        "id_container_video": "alicizationendingp2",
        "src_video": "videos/alicization/ending/2/Sao-Forget-Me-Not-Ending.mp4",
        "final_duration": "01:27"
    },
    {
        "nombre_video": "Ending - Arco Alicization (Part 2)",
        "id_container_video": "clipforgetmenot",
        "src_video": "videos/alicization/ending/2/Sao-Forget-Me-Not-Ending-Clip.mp4",
        "final_duration": "04:47"
    },
    {
        "nombre_video": "Opening - Arco War Of Underworld (Part 1)",
        "id_container_video": "underworldseriep1",
        "src_video": "videos/underworld/opening/1/Sao-Resolution-Opening.mp4",
        "final_duration": "01:32"
    },
    {
        "nombre_video": "Opening - Arco War Of Underworld (Part 1)",
        "id_container_video": "clipresolution",
        "src_video": "videos/underworld/opening/1/Sao-Resolution-Opening-Clip.mp4",
        "final_duration": "05:28"
    },
    {
        "nombre_video": "Opening - Arco Alicization (Part 2)",
        "id_container_video": "underworldseriep2",
        "src_video": "videos/underworld/opening/2/Sao-Anima-Opening.mp4",
        "final_duration": "01:32"
    },
    {
        "nombre_video": "Opening - Arco Alicization (Part 2)",
        "id_container_video": "clipanima",
        "src_video": "videos/underworld/opening/2/Sao-Anima-Opening-Clip.mp4",
        "final_duration": "04:45"
    },
    {
        "nombre_video": "Ending - Arco War Of Underworld (Part 1)",
        "id_container_video": "underworldendingp1",
        "src_video": "videos/underworld/ending/1/Sao-Unlasting-Ending.mp4",
        "final_duration": "01:29"
    },
    {
        "nombre_video": "Ending - Arco War Of Underworld (Part 1)",
        "id_container_video": "clipunlasting",
        "src_video": "videos/underworld/ending/1/Sao-Unlasting-Ending-Clip.mp4",
        "final_duration": "04:53"
    },
    {
        "nombre_video": "Ending - Arco Alicization (Part 2)",
        "id_container_video": "underworldendingp2",
        "src_video": "videos/underworld/ending/2/Sao-Iwill-Ending.mp4",
        "final_duration": "01:28"
    },
    {
        "nombre_video": "Ending - Arco Alicization (Part 2)",
        "id_container_video": "clipiwill",
        "src_video": "videos/underworld/ending/2/Sao-Iwill-Ending-Clip.mp4",
        "final_duration": "04:35"
    },
    {
        "nombre_video": "Video - Film Progressive",
        "id_container_video": "progressiveserie",
        "src_video": "videos/progressive/opening/Eir-Aoi-Shinzou.mp4",
        "final_duration": "03:16"
    },
    {
        "nombre_video": "Video Clip - Film Progressive",
        "id_container_video": "clipshinzou",
        "src_video": "videos/progressive/opening/Eir-Aoi-Shinzou-Clip.mp4",
        "final_duration": "03:57"
    },
    {
        "nombre_video": "Video Ending - Film Progressive",
        "id_container_video": "progressiveending",
        "src_video": "videos/progressive/ending/Lisa-Yuke-Ending.mp4",
        "final_duration": "03:45"
    },
    {
        "nombre_video": "Video Clip Ending - Film Progressive",
        "id_container_video": "clipyuke",
        "src_video": "videos/progressive/ending/Lisa-Yuke-Ending-Clip.mp4",
        "final_duration": "04:04"
    }
]