const cnlist = {
    "custom_nodes": [
        {
            "author": "Dr.Lt.Data",
            "title": "ComfyUI-Manager",
            "id": "manager",
            "reference": "https://github.com/ltdrdata/ComfyUI-Manager",
            "files": [
                "https://github.com/ltdrdata/ComfyUI-Manager"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI-Manager itself is also a custom node."
        },
        {
            "author": "Dr.Lt.Data",
            "title": "ComfyUI Impact Pack",
            "id": "impact",
            "reference": "https://github.com/ltdrdata/ComfyUI-Impact-Pack",
            "files": [
                "https://github.com/ltdrdata/ComfyUI-Impact-Pack"
            ],
            "pip": ["ultralytics"],
            "install_type": "git-clone",
            "description": "This extension offers various detector nodes and detailer nodes that allow you to configure a workflow that automatically enhances facial details. And provide iterative upscaler."
        },
        {
            "author": "Dr.Lt.Data",
            "title": "ComfyUI Inspire Pack",
            "id": "inspire",
            "reference": "https://github.com/ltdrdata/ComfyUI-Inspire-Pack",
            "nodename_pattern": "Inspire$",
            "files": [
                "https://github.com/ltdrdata/ComfyUI-Inspire-Pack"
            ],
            "install_type": "git-clone",
            "description": "This extension provides various nodes to support Lora Block Weight and the Impact Pack. Provides many easily applicable regional features and applications for Variation Seed."
        },
        {
            "author": "comfyanonymous",
            "title": "ComfyUI_experiments",
            "id": "comfy-exp",
            "reference": "https://github.com/comfyanonymous/ComfyUI_experiments",
            "files": [
                "https://github.com/comfyanonymous/ComfyUI_experiments"
            ],
            "install_type": "git-clone",
            "description": "Nodes: ModelSamplerTonemapNoiseTest, TonemapNoiseWithRescaleCFG, ReferenceOnlySimple, RescaleClassifierFreeGuidanceTest, ModelMergeBlockNumber, ModelMergeSDXL, ModelMergeSDXLTransformers, ModelMergeSDXLDetailedTransformers."
        },
        {
            "author": "Stability-AI",
            "title": "Stability API nodes for ComfyUI",
            "id": "sai-api",
            "reference": "https://github.com/Stability-AI/ComfyUI-SAI_API",
            "files": [
                "https://github.com/Stability-AI/ComfyUI-SAI_API"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Stability SD3, Stability Outpainting, Stability Search and Replace, Stability Image Core, Stability Inpainting, Stability Remove Background, Stability Creative Upscale.\nAdd API key to environment variable 'SAI_API_KEY'\nAlternatively you can write your API key to file 'sai_platform_key.txt'\nYou can also use and/or override the above by entering your API key in the 'api_key_override' field of each node."
        },
        {
            "author": "Stability-AI",
            "title": "stability-ComfyUI-nodes",
            "id": "sai-nodes",
            "reference": "https://github.com/Stability-AI/stability-ComfyUI-nodes",
            "files": [
                "https://github.com/Stability-AI/stability-ComfyUI-nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes: ColorBlend, ControlLoraSave, GetImageSize. NOTE: Control-LoRA recolor example uses these nodes."
        },
        {
            "author": "Fannovel16",
            "title": "ComfyUI's ControlNet Auxiliary Preprocessors",
            "id": "cnet-aux",
            "reference": "https://github.com/Fannovel16/comfyui_controlnet_aux",
            "files": [
                "https://github.com/Fannovel16/comfyui_controlnet_aux"
            ],
            "preemptions":[
                "AIO_Preprocessor",
                "AnimalPosePreprocessor",
                "AnimeFace_SemSegPreprocessor",
                "AnimeLineArtPreprocessor",
                "BAE-NormalMapPreprocessor",
                "BinaryPreprocessor",
                "CannyEdgePreprocessor",
                "ColorPreprocessor",
                "DSINE-NormalMapPreprocessor",
                "DWPreprocessor",
                "DensePosePreprocessor",
                "DepthAnythingPreprocessor",
                "DiffusionEdge_Preprocessor",
                "FacialPartColoringFromPoseKps",
                "FakeScribblePreprocessor",
                "HEDPreprocessor",
                "HintImageEnchance",
                "ImageGenResolutionFromImage",
                "ImageGenResolutionFromLatent",
                "ImageIntensityDetector",
                "ImageLuminanceDetector",
                "InpaintPreprocessor",
                "LeReS-DepthMapPreprocessor",
                "LineArtPreprocessor",
                "LineartStandardPreprocessor",
                "M-LSDPreprocessor",
                "Manga2Anime_LineArt_Preprocessor",
                "MaskOptFlow",
                "MediaPipe-FaceMeshPreprocessor",
                "MeshGraphormer-DepthMapPreprocessor",
                "MiDaS-DepthMapPreprocessor",
                "MiDaS-NormalMapPreprocessor",
                "OneFormer-ADE20K-SemSegPreprocessor",
                "OneFormer-COCO-SemSegPreprocessor",
                "OpenposePreprocessor",
                "PiDiNetPreprocessor",
                "PixelPerfectResolution",
                "SAMPreprocessor",
                "SavePoseKpsAsJsonFile",
                "ScribblePreprocessor",
                "Scribble_XDoG_Preprocessor",
                "SemSegPreprocessor",
                "ShufflePreprocessor",
                "TEEDPreprocessor",
                "TilePreprocessor",
                "UniFormer-SemSegPreprocessor",
                "Unimatch_OptFlowPreprocessor",
                "Zoe-DepthMapPreprocessor",
                "Zoe_DepthAnythingPreprocessor"],
            "install_type": "git-clone",
            "description": "This is a rework of comfyui_controlnet_preprocessors based on ControlNet auxiliary models by 🤗. I think the old repo isn't good enough to maintain. All old workflow will still be work with this repo but the version option won't do anything. Almost all v1 preprocessors are replaced by v1.1 except those doesn't appear in v1.1. [w/NOTE: Please refrain from using the controlnet preprocessor alongside this installation, as it may lead to conflicts and prevent proper recognition.]"
        },
        {
            "author": "Fannovel16",
            "title": "ComfyUI Frame Interpolation",
            "id": "frame-interpolation",
            "reference": "https://github.com/Fannovel16/ComfyUI-Frame-Interpolation",
            "files": [
                "https://github.com/Fannovel16/ComfyUI-Frame-Interpolation"
            ],
            "install_type": "git-clone",
            "description": "Nodes: KSampler Gradually Adding More Denoise (efficient)"
        },
        {
            "author": "Fannovel16",
            "title": "ComfyUI Loopchain",
            "id": "loopchain",
            "reference": "https://github.com/Fannovel16/ComfyUI-Loopchain",
            "files": [
                "https://github.com/Fannovel16/ComfyUI-Loopchain"
            ],
            "install_type": "git-clone",
            "description": "A collection of nodes which can be useful for animation in ComfyUI. The main focus of this extension is implementing a mechanism called loopchain. A loopchain in this case is the chain of nodes only executed repeatly in the workflow. If a node chain contains a loop node from this extension, it will become a loop chain."
        },
        {
            "author": "Fannovel16",
            "title": "ComfyUI MotionDiff",
            "id": "motiondiff",
            "reference": "https://github.com/Fannovel16/ComfyUI-MotionDiff",
            "files": [
                "https://github.com/Fannovel16/ComfyUI-MotionDiff"
            ],
            "install_type": "git-clone",
            "description": "Implementation of MDM, MotionDiffuse and ReMoDiffuse into ComfyUI."
        },
        {
            "author": "Fannovel16",
            "title": "ComfyUI-Video-Matting",
            "id": "video-matting",
            "reference": "https://github.com/Fannovel16/ComfyUI-Video-Matting",
            "files": [
                "https://github.com/Fannovel16/ComfyUI-Video-Matting"
            ],
            "install_type": "git-clone",
            "description": "A minimalistic implementation of [a/Robust Video Matting (RVM)](https://github.com/PeterL1n/RobustVideoMatting/) in ComfyUI"
        },
        {
            "author": "Fannovel16",
            "title": "ComfyUI-MagickWand",
            "id": "magicwand",
            "reference": "https://github.com/Fannovel16/ComfyUI-MagickWand",
            "files": [
                "https://github.com/Fannovel16/ComfyUI-MagickWand"
            ],
            "install_type": "git-clone",
            "description": "Proper implementation of ImageMagick - the famous software suite for editing and manipulating digital images to ComfyUI using [a/wandpy](https://github.com/emcconville/wand).\nNOTE: You need to install ImageMagick, manually."
        },
        {
            "author": "biegert",
            "title": "CLIPSeg",
            "id": "clipseg",
            "reference": "https://github.com/biegert/ComfyUI-CLIPSeg",
            "files": [
                "https://github.com/biegert/ComfyUI-CLIPSeg/raw/main/custom_nodes/clipseg.py"
            ],
            "install_type": "copy",
            "description": "The CLIPSeg node generates a binary mask for a given input image and text prompt."
        },
        {
            "author": "BlenderNeko",
            "title": "ComfyUI Cutoff",
            "id": "cutoff",
            "reference": "https://github.com/BlenderNeko/ComfyUI_Cutoff",
            "files": [
                "https://github.com/BlenderNeko/ComfyUI_Cutoff"
            ],
            "install_type": "git-clone",
            "description": "These custom nodes provides features that allow for better control over the effects of the text prompt."
        },
        {
            "author": "BlenderNeko",
            "title": "Advanced CLIP Text Encode",
            "id": "adv-encode",
            "reference": "https://github.com/BlenderNeko/ComfyUI_ADV_CLIP_emb",
            "files": [
                "https://github.com/BlenderNeko/ComfyUI_ADV_CLIP_emb"
            ],
            "install_type": "git-clone",
            "description": "Advanced CLIP Text Encode (if you need A1111 like prompt. you need this. But Cutoff node includes this feature, already.)"
        },
        {
            "author": "BlenderNeko",
            "title": "ComfyUI Noise",
            "id": "comfy-noise",
            "reference": "https://github.com/BlenderNeko/ComfyUI_Noise",
            "files": [
                "https://github.com/BlenderNeko/ComfyUI_Noise"
            ],
            "install_type": "git-clone",
            "description": "This extension contains 6 nodes for ComfyUI that allows for more control and flexibility over the noise."
        },
        {
            "author": "BlenderNeko",
            "title": "Tiled sampling for ComfyUI",
            "id": "tiled-sampling",
            "reference": "https://github.com/BlenderNeko/ComfyUI_TiledKSampler",
            "files": [
                "https://github.com/BlenderNeko/ComfyUI_TiledKSampler"
            ],
            "install_type": "git-clone",
            "description": "This extension contains a tiled sampler for ComfyUI. It allows for denoising larger images by splitting it up into smaller tiles and denoising these. It tries to minimize any seams for showing up in the end result by gradually denoising all tiles one step at the time and randomizing tile positions for every step."
        },
        {
            "author": "BlenderNeko",
            "title": "SeeCoder [WIP]",
            "id": "seecoder",
            "reference": "https://github.com/BlenderNeko/ComfyUI_SeeCoder",
            "files": [
                "https://github.com/BlenderNeko/ComfyUI_SeeCoder"
            ],
            "install_type": "git-clone",
            "description": "It provides the capability to generate CLIP from an image input, unlike unCLIP, which works in all models. (To use this extension, you need to download the required model file from **Install Models**)"
        },
        {
            "author": "jags111",
            "title": "Efficiency Nodes for ComfyUI Version 2.0+",
            "id": "eff-nodes",
            "reference": "https://github.com/jags111/efficiency-nodes-comfyui",
            "files": [
                "https://github.com/jags111/efficiency-nodes-comfyui"
            ],
            "install_type": "git-clone",
            "description": "A collection of ComfyUI custom nodes to help streamline workflows and reduce total node count.[w/NOTE: This node is originally created by LucianoCirino, but the [a/original repository](https://github.com/LucianoCirino/efficiency-nodes-comfyui) is no longer maintained and has been forked by a new maintainer. To use the forked version, you should uninstall the original version and **REINSTALL** this one.]"
        },
        {
            "author": "jags111",
            "title": "Jags_VectorMagic",
            "id": "vectormagic",
            "reference": "https://github.com/jags111/ComfyUI_Jags_VectorMagic",
            "files": [
                "https://github.com/jags111/ComfyUI_Jags_VectorMagic"
            ],
            "install_type": "git-clone",
            "description": "a collection of nodes to explore Vector and image manipulation"
        },
        {
            "author": "jags111",
            "title": "Jags_Audiotools",
            "id": "audiotools",
            "reference": "https://github.com/jags111/ComfyUI_Jags_Audiotools",
            "files": [
                "https://github.com/jags111/ComfyUI_Jags_Audiotools"
            ],
            "install_type": "git-clone",
            "description": "This extension offers various audio generation tools"
        },
        {
            "author": "Derfuu",
            "title": "Derfuu_ComfyUI_ModdedNodes",
            "id": "derfuu",
            "reference": "https://github.com/Derfuu/Derfuu_ComfyUI_ModdedNodes",
            "nodename_pattern": "^DF_",
            "files": [
                "https://github.com/Derfuu/Derfuu_ComfyUI_ModdedNodes"
            ],
            "install_type": "git-clone",
            "description": "Automate calculation depending on image sizes or something you want."
        },
        {
            "author": "paulo-coronado",
            "title": "comfy_clip_blip_node",
            "id": "blip",
            "reference": "https://github.com/paulo-coronado/comfy_clip_blip_node",
            "files": [
                "https://github.com/paulo-coronado/comfy_clip_blip_node"
            ],
            "install_type": "git-clone",
            "apt_dependency": [
                "rustc",
                "cargo"
            ],
            "description": "CLIPTextEncodeBLIP: This custom node provides a CLIP Encoder that is capable of receiving images as input."
        },
        {
            "author": "WASasquatch",
            "title": "WAS Node Suite",
            "id": "was",
            "reference": "https://github.com/WASasquatch/was-node-suite-comfyui",
            "pip": ["numba"],
            "files": [
                "https://github.com/WASasquatch/was-node-suite-comfyui"
            ],
            "install_type": "git-clone",
            "description": "A node suite for ComfyUI with many new nodes, such as image processing, text processing, and more."
        },
        {
            "author": "WASasquatch",
            "title": "ComfyUI Preset Merger",
            "id": "preset-merger",
            "reference": "https://github.com/WASasquatch/ComfyUI_Preset_Merger",
            "files": [
                "https://github.com/WASasquatch/ComfyUI_Preset_Merger"
            ],
            "install_type": "git-clone",
            "description": "Nodes: ModelMergeByPreset. Merge checkpoint models by preset"
        },
        {
            "author": "WASasquatch",
            "title": "PPF_Noise_ComfyUI",
            "id": "ppf",
            "reference": "https://github.com/WASasquatch/PPF_Noise_ComfyUI",
            "files": [
                "https://github.com/WASasquatch/PPF_Noise_ComfyUI"
            ],
            "install_type": "git-clone",
            "description": "Nodes: WAS_PFN_Latent. Perlin Power Fractal Noisey Latents"
        },
        {
            "author": "WASasquatch",
            "title": "Power Noise Suite for ComfyUI",
            "id": "power-noise",
            "reference": "https://github.com/WASasquatch/PowerNoiseSuite",
            "files": [
                "https://github.com/WASasquatch/PowerNoiseSuite"
            ],
            "install_type": "git-clone",
            "description": "Power Noise Suite contains nodes centered around latent noise input, and diffusion, as well as latent adjustments."
        },
        {
            "author": "WASasquatch",
            "title": "FreeU_Advanced",
            "id": "freeu-adv",
            "reference": "https://github.com/WASasquatch/FreeU_Advanced",
            "files": [
                "https://github.com/WASasquatch/FreeU_Advanced"
            ],
            "install_type": "git-clone",
            "description": "This custom node provides advanced settings for FreeU."
        },
        {
            "author": "WASasquatch",
            "title": "ASTERR",
            "id": "asterr",
            "reference": "https://github.com/WASasquatch/ASTERR",
            "files": [
                "https://github.com/WASasquatch/ASTERR"
            ],
            "install_type": "git-clone",
            "description": "Abstract Syntax Trees Evaluated Restricted Run (ASTERR) is a Python Script executor for ComfyUI. [w/Warning:ASTERR runs Python Code from a Web Interface! It is highly recommended to run this in a closed-off environment, as it could have potential security risks.]"
        },
        {
            "author": "WASasquatch",
            "title": "WAS_Extras",
            "id": "was-extras",
            "reference": "https://github.com/WASasquatch/WAS_Extras",
            "files": [
                "https://github.com/WASasquatch/WAS_Extras"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Conditioning (Blend), Inpainting VAE Encode (WAS), VividSharpen. Experimental nodes, or other random extra helper nodes."
        },
        {
            "author": "SaltAI",
            "title": "SaltAI-Open-Resources",
            "id": "saltai-open-resource",
            "reference": "https://github.com/get-salt-AI/SaltAI",
            "pip": ["numba"],
            "files": [
                "https://github.com/get-salt-AI/SaltAI"
            ],
            "install_type": "git-clone",
            "description": "This repository is a collection of open-source nodes and workflows for ComfyUI, a dev tool that allows users to create node-based workflows often powered by various AI models to do pretty much anything.\nOur mission is to seamlessly connect people and organizations with the world’s foremost AI innovations, anywhere, anytime. Our vision is to foster a flourishing AI ecosystem where the world’s best developers can build and share their work, thereby redefining how software is made, pushing innovation forward, and ensuring as many people as possible can benefit from the positive promise of AI technologies.\nWe believe that ComfyUI is a powerful tool that can help us achieve our mission and vision, by enabling anyone to explore the possibilities and limitations of AI models in a visual and interactive way, without coding if desired.\nWe hope that by sharing our nodes and workflows, we can inspire and empower more people to create amazing AI-powered content with ComfyUI."
        },
        {
            "author": "SaltAI",
            "title": "SaltAI_LlamaIndex",
            "id": "saltai-llamaindex",
            "reference": "https://github.com/get-salt-AI/SaltAI_LlamaIndex",
            "files": [
                "https://github.com/get-salt-AI/SaltAI_LlamaIndex"
            ],
            "install_type": "git-clone",
            "description": "An implementation of the RAG LlamaIndex with Agents from AutoGen"
        },
        {
            "author": "omar92",
            "title": "Quality of life Suit:V2",
            "id": "qol",
            "reference": "https://github.com/omar92/ComfyUI-QualityOfLifeSuit_Omar92",
            "files": [
                "https://github.com/omar92/ComfyUI-QualityOfLifeSuit_Omar92"
            ],
            "install_type": "git-clone",
            "description": "openAI suite, String suite, Latent Tools, Image Tools: These custom nodes provide expanded functionality for image and string processing, latent processing, as well as the ability to interface with models such as ChatGPT/DallE-2.\nNOTE: Currently, this extension does not support the new OpenAI API, leading to compatibility issues."
        },
        {
            "author": "lilly1987",
            "title": "simple wildcard for ComfyUI",
            "id": "simle-wildcard",
            "reference": "https://github.com/lilly1987/ComfyUI_node_Lilly",
            "files": [
                "https://github.com/lilly1987/ComfyUI_node_Lilly"
            ],
            "install_type": "git-clone",
            "description": "These custom nodes provides a feature to insert arbitrary inputs through wildcards in the prompt. Additionally, this tool provides features that help simplify workflows, such as VAELoaderDecoder and SimplerSample."
        },
        {
            "author": "sylym",
            "title": "Vid2vid",
            "id": "vid2vid",
            "reference": "https://github.com/sylym/comfy_vid2vid",
            "files": [
                "https://github.com/sylym/comfy_vid2vid"
            ],
            "install_type": "git-clone",
            "description": "A node suite for ComfyUI that allows you to load image sequence and generate new image sequence with different styles or content."
        },
        {
            "author": "EllangoK",
            "title": "ComfyUI-post-processing-nodes",
            "id": "post-processing",
            "reference": "https://github.com/EllangoK/ComfyUI-post-processing-nodes",
            "files": [
                "https://github.com/EllangoK/ComfyUI-post-processing-nodes"
            ],
            "install_type": "git-clone",
            "description": "A collection of post processing nodes for ComfyUI, simply download this repo and drag."
        },
        {
            "author": "LEv145",
            "title": "ImagesGrid",
            "id": "imagesgrid",
            "reference": "https://github.com/LEv145/images-grid-comfy-plugin",
            "files": [
                "https://github.com/LEv145/images-grid-comfy-plugin"
            ],
            "install_type": "git-clone",
            "description": "This tool provides a viewer node that allows for checking multiple outputs in a grid, similar to the X/Y Plot extension."
        },
        {
            "author": "diontimmer",
            "title": "ComfyUI-Vextra-Nodes",
            "id": "vextra",
            "reference": "https://github.com/diontimmer/ComfyUI-Vextra-Nodes",
            "files": [
                "https://github.com/diontimmer/ComfyUI-Vextra-Nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Pixel Sort, Swap Color Mode, Solid Color, Glitch This, Add Text To Image, Play Sound, Prettify Prompt, Generate Noise, Flatten Colors"
        },
        {
            "author": "CYBERLOOM-INC",
            "title": "ComfyUI-nodes-hnmr",
            "id": "hnmr",
            "reference": "https://github.com/CYBERLOOM-INC/ComfyUI-nodes-hnmr",
            "files": [
                "https://github.com/CYBERLOOM-INC/ComfyUI-nodes-hnmr"
            ],
            "install_type": "git-clone",
            "description": "Provide various custom nodes for Latent, Sampling, Model, Loader, Image, Text. This is the fixed version of the original [a/ComfyUI-nodes-hnmr](https://github.com/hnmr293/ComfyUI-nodes-hnmr) by hnmr293."
        },
        {
            "author": "BadCafeCode",
            "title": "Masquerade Nodes",
            "id": "masquerade",
            "reference": "https://github.com/BadCafeCode/masquerade-nodes-comfyui",
            "files": [
                "https://github.com/BadCafeCode/masquerade-nodes-comfyui"
            ],
            "install_type": "git-clone",
            "description": "This is a node pack for ComfyUI, primarily dealing with masks."
        },
        {
            "author": "guoyk93",
            "title": "y.k.'s ComfyUI node suite",
            "id": "yks",
            "reference": "https://github.com/guoyk93/yk-node-suite-comfyui",
            "files": [
                "https://github.com/guoyk93/yk-node-suite-comfyui"
            ],
            "install_type": "git-clone",
            "description": "Nodes: YKImagePadForOutpaint, YKMaskToImage"
        },
        {
            "author": "Jcd1230",
            "title": "Rembg Background Removal Node for ComfyUI",
            "id": "rembg",
            "reference": "https://github.com/Jcd1230/rembg-comfyui-node",
            "files": [
                "https://github.com/Jcd1230/rembg-comfyui-node"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Image Remove Background (rembg)"
        },
        {
            "author": "YinBailiang",
            "title": "MergeBlockWeighted_fo_ComfyUI",
            "id": "mbw",
            "reference": "https://github.com/YinBailiang/MergeBlockWeighted_fo_ComfyUI",
            "files": [
                "https://github.com/YinBailiang/MergeBlockWeighted_fo_ComfyUI"
            ],
            "install_type": "git-clone",
            "description": "Nodes: MergeBlockWeighted"
        },
        {
            "author": "trojblue",
            "title": "trNodes",
            "id": "trnodes",
            "reference": "https://github.com/trojblue/trNodes",
            "files": [
                "https://github.com/trojblue/trNodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes: image_layering, color_correction, model_router"
        },
        {
            "author": "szhublox",
            "title": "Auto-MBW",
            "id": "auto-mbw",
            "reference": "https://github.com/szhublox/ambw_comfyui",
            "files": [
                "https://github.com/szhublox/ambw_comfyui"
            ],
            "install_type": "git-clone",
            "description": "Auto-MBW for ComfyUI loosely based on sdweb-auto-MBW. Nodes: auto merge block weighted"
        },
        {
            "author": "city96",
            "title": "ComfyUI_NetDist",
            "id": "netdist",
            "reference": "https://github.com/city96/ComfyUI_NetDist",
            "files": [
                "https://github.com/city96/ComfyUI_NetDist"
            ],
            "install_type": "git-clone",
            "description": "Run ComfyUI workflows on multiple local GPUs/networked machines. Nodes: Remote images, Local Remote control"
        },
        {
            "author": "city96",
            "title": "Latent-Interposer",
            "id": "latent-interposer",
            "reference": "https://github.com/city96/SD-Latent-Interposer",
            "files": [
                "https://github.com/city96/SD-Latent-Interposer"
            ],
            "install_type": "git-clone",
            "description": "Custom node to convert the lantents between SDXL and SD v1.5 directly without the VAE decoding/encoding step."
        },
        {
            "author": "city96",
            "title": "SD-Advanced-Noise",
            "id": "adv-noise",
            "reference": "https://github.com/city96/SD-Advanced-Noise",
            "files": [
                "https://github.com/city96/SD-Advanced-Noise"
            ],
            "install_type": "git-clone",
            "description": "Nodes: LatentGaussianNoise, MathEncode. An experimental custom node that generates latent noise directly by utilizing the linear characteristics of the latent space."
        },
        {
            "author": "city96",
            "title": "SD-Latent-Upscaler",
            "id": "latent-upscaler",
            "reference": "https://github.com/city96/SD-Latent-Upscaler",
            "files": [
                "https://github.com/city96/SD-Latent-Upscaler"
            ],
            "pip": ["huggingface-hub"],
            "install_type": "git-clone",
            "description": "Upscaling stable diffusion latents using a small neural network."
        },
        {
            "author": "city96",
            "title": "ComfyUI_DiT [WIP]",
            "id": "dit",
            "reference": "https://github.com/city96/ComfyUI_DiT",
            "files": [
                "https://github.com/city96/ComfyUI_DiT"
            ],
            "pip": ["huggingface-hub"],
            "install_type": "git-clone",
            "description": "Testbed for [a/DiT(Scalable Diffusion Models with Transformers)](https://github.com/facebookresearch/DiT). [w/None of this code is stable, expect breaking changes if for some reason you want to use this.]"
        },
        {
            "author": "city96",
            "title": "ComfyUI_ColorMod",
            "id": "colormod",
            "reference": "https://github.com/city96/ComfyUI_ColorMod",
            "files": [
                "https://github.com/city96/ComfyUI_ColorMod"
            ],
            "install_type": "git-clone",
            "description": "This extension currently has two sets of nodes - one set for editing the contrast/color of images and another set for saving images as 16 bit PNG files."
        },
        {
            "author": "city96",
            "title": "Extra Models for ComfyUI",
            "id": "extramodels",
            "reference": "https://github.com/city96/ComfyUI_ExtraModels",
            "files": [
                "https://github.com/city96/ComfyUI_ExtraModels"
            ],
            "install_type": "git-clone",
            "description": "This extension aims to add support for various random image diffusion models to ComfyUI."
        },
        {
            "author": "Kaharos94",
            "title": "ComfyUI-Saveaswebp",
            "id": "save-webp",
            "reference": "https://github.com/Kaharos94/ComfyUI-Saveaswebp",
            "files": [
                "https://github.com/Kaharos94/ComfyUI-Saveaswebp"
            ],
            "install_type": "git-clone",
            "description": "Save a picture as Webp file in Comfy + Workflow loading"
        },
        {
            "author": "SLAPaper",
            "title": "ComfyUI-Image-Selector",
            "id": "image-selector",
            "reference": "https://github.com/SLAPaper/ComfyUI-Image-Selector",
            "files": [
                "https://github.com/SLAPaper/ComfyUI-Image-Selector"
            ],
            "install_type": "git-clone",
            "description": "A custom node for ComfyUI, which can select one or some of images from a batch."
        },
        {
            "author": "SLAPaper",
            "title": "ComfyUI DPM++ 2M Alt Sampler",
            "id": "dpmpp2m-alt",
            "reference": "https://github.com/SLAPaper/ComfyUI-dpmpp_2m_alt-Sampler",
            "files": [
                "https://github.com/SLAPaper/ComfyUI-dpmpp_2m_alt-Sampler"
            ],
            "install_type": "git-clone",
            "description": "the sampler introduced by [a/hallatore](https://github.com/AUTOMATIC1111/stable-diffusion-webui/discussions/8457)\ncode extracted from [a/smZNodes](https://github.com/shiimizu/ComfyUI_smZNodes)"
        },
        {
            "author": "flyingshutter",
            "title": "As_ComfyUI_CustomNodes",
            "reference": "https://github.com/flyingshutter/As_ComfyUI_CustomNodes",
            "files": [
                "https://github.com/flyingshutter/As_ComfyUI_CustomNodes"
            ],
            "install_type": "git-clone",
            "description": "Manipulation nodes for Image, Latent"
        },
        {
            "author": "Zuellni",
            "title": "Zuellni/ComfyUI-Custom-Nodes",
            "reference": "https://github.com/Zuellni/ComfyUI-Custom-Nodes",
            "files": [
                "https://github.com/Zuellni/ComfyUI-Custom-Nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes: DeepFloyd, Filter, Select, Save, Decode, Encode, Repeat, Noise, Noise"
        },
        {
            "author": "Zuellni",
            "title": "ComfyUI-ExLlama",
            "id": "exllama",
            "reference": "https://github.com/Zuellni/ComfyUI-ExLlama",
            "files": [
                "https://github.com/Zuellni/ComfyUI-ExLlama"
            ],
            "pip": ["sentencepiece", "https://github.com/jllllll/exllama/releases/download/0.0.17/exllama-0.0.17+cu118-cp310-cp310-win_amd64.whl"],
            "install_type": "git-clone",
            "description": "Nodes: ExLlama Loader, ExLlama Generator.\nUsed to load 4-bit GPTQ Llama/2 models. You can find a lot of them over at [a/https://huggingface.co/TheBloke](https://huggingface.co/TheBloke)[w/NOTE: You need to manually install a pip package that suits your system. For example. If your system is 'Python3.10 + Windows + CUDA 11.8' then you need to install 'exllama-0.0.17+cu118-cp310-cp310-win_amd64.whl'. Available package files are [a/here](https://github.com/jllllll/exllama/releases)]"
        },
        {
            "author": "Zuellni",
            "title": "ComfyUI ExLlamaV2 Nodes",
            "id": "exllamav2",
            "reference": "https://github.com/Zuellni/ComfyUI-ExLlama-Nodes",
            "files": [
                "https://github.com/Zuellni/ComfyUI-ExLlama-Nodes"
            ],
            "install_type": "git-clone",
            "description": "A simple local text generator for ComfyUI utilizing [a/ExLlamaV2](https://github.com/turboderp/exllamav2).\n[w/NOTE:Manual package installation is required.]"
        },
        {
            "author": "Zuellni",
            "title": "ComfyUI PickScore Nodes",
            "id": "pickscore",
            "reference": "https://github.com/Zuellni/ComfyUI-PickScore-Nodes",
            "files": [
                "https://github.com/Zuellni/ComfyUI-PickScore-Nodes"
            ],
            "install_type": "git-clone",
            "description": "Image scoring nodes for ComfyUI using PickScore with a batch of images to predict which ones fit a given prompt the best."
        },
        {
            "author": "AlekPet",
            "title": "AlekPet/ComfyUI_Custom_Nodes_AlekPet",
            "id": "alekpet",
            "reference": "https://github.com/AlekPet/ComfyUI_Custom_Nodes_AlekPet",
            "files": [
                "https://github.com/AlekPet/ComfyUI_Custom_Nodes_AlekPet"
            ],
            "install_type": "git-clone",
            "description": "Nodes: PoseNode, PainterNode, TranslateTextNode, TranslateCLIPTextEncodeNode, DeepTranslatorTextNode, DeepTranslatorCLIPTextEncodeNode, ArgosTranslateTextNode, ArgosTranslateCLIPTextEncodeNode, PreviewTextNode.\n\nNOTE: Due to the dynamic nature of node name definitions, ComfyUI-Manager cannot recognize the node list from this extension. The Missing nodes and Badge features are not available for this extension."
        },
        {
            "author": "pythongosssss",
            "title": "ComfyUI WD 1.4 Tagger",
            "id": "wd14",
            "reference": "https://github.com/pythongosssss/ComfyUI-WD14-Tagger",
            "files": [
                "https://github.com/pythongosssss/ComfyUI-WD14-Tagger"
            ],
            "install_type": "git-clone",
            "description": "A ComfyUI extension allowing the interrogation of booru tags from images."
        },
        {
            "author": "pythongosssss",
            "title": "pythongosssss/ComfyUI-Custom-Scripts",
            "id": "pygos-script",
            "reference": "https://github.com/pythongosssss/ComfyUI-Custom-Scripts",
            "files": [
                "https://github.com/pythongosssss/ComfyUI-Custom-Scripts"
            ],
            "install_type": "git-clone",
            "description": "This extension provides: Auto Arrange Graph, Workflow SVG, Favicon Status, Image Feed, Latent Upscale By, Lock Nodes & Groups, Lora Subfolders, Preset Text, Show Text, Touch Support, Link Render Mode, Locking, Node Finder, Quick Nodes, Show Image On Menu, Show Text, Workflow Managements, Custom Widget Default Values"
        },
        {
            "author": "strimmlarn",
            "title": "ComfyUI_Strimmlarns_aesthetic_score",
            "id": "aesthetic-score",
            "reference": "https://github.com/strimmlarn/ComfyUI_Strimmlarns_aesthetic_score",
            "js_path": "strimmlarn",
            "files": [
                "https://github.com/strimmlarn/ComfyUI_Strimmlarns_aesthetic_score"
            ],
            "install_type": "git-clone",
            "description": "Nodes: CalculateAestheticScore, LoadAesteticModel, AesthetlcScoreSorter, ScoreToNumber"
        },
        {
            "author": "TinyTerra",
            "title": "ComfyUI_tinyterraNodes",
            "id": "ttn",
            "reference": "https://github.com/tinyterra/ComfyUI_tinyterraNodes",
            "files": [
                "https://github.com/TinyTerra/ComfyUI_tinyterraNodes"
            ],
            "install_type": "git-clone",
            "nodename_pattern": "^ttN ",
            "description": "This extension offers various pipe nodes, fullscreen image viewer based on node history, dynamic widgets, interface customization, and more."
        },
        {
            "author": "Jordach",
            "title": "comfy-plasma",
            "id": "plasma",
            "reference": "https://github.com/Jordach/comfy-plasma",
            "files": [
                "https://github.com/Jordach/comfy-plasma"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Plasma Noise, Random Noise, Greyscale Noise, Pink Noise, Brown Noise, Plasma KSampler"
        },
        {
            "author": "bvhari",
            "title": "ImageProcessing",
            "id": "imageprocessing",
            "reference": "https://github.com/bvhari/ComfyUI_ImageProcessing",
            "files": [
                "https://github.com/bvhari/ComfyUI_ImageProcessing"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI custom nodes to apply various image processing techniques."
        },
        {
            "author": "bvhari",
            "title": "LatentToRGB",
            "id": "latent2rgb",
            "reference": "https://github.com/bvhari/ComfyUI_LatentToRGB",
            "files": [
                "https://github.com/bvhari/ComfyUI_LatentToRGB"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI custom node to convert latent to RGB."
        },
        {
            "author": "bvhari",
            "title": "ComfyUI_PerpWeight",
            "id": "perpweight",
            "reference": "https://github.com/bvhari/ComfyUI_PerpWeight",
            "files": [
                "https://github.com/bvhari/ComfyUI_PerpWeight"
            ],
            "install_type": "git-clone",
            "description": "A novel weighting scheme for token vectors from CLIP. Allows a wider range of values for the weight. Inspired by Perp-Neg."
        },
        {
            "author": "bvhari",
            "title": "ComfyUI_SUNoise",
            "id": "sunoise",
            "reference": "https://github.com/bvhari/ComfyUI_SUNoise",
            "files": [
                "https://github.com/bvhari/ComfyUI_SUNoise"
            ],
            "install_type": "git-clone",
            "description": "Scaled Uniform Noise for Ancestral and Stochastic samplers"
        },
        {
            "author": "ssitu",
            "title": "UltimateSDUpscale",
            "id": "usdu",
            "reference": "https://github.com/ssitu/ComfyUI_UltimateSDUpscale",
            "files": [
                "https://github.com/ssitu/ComfyUI_UltimateSDUpscale"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI nodes for the Ultimate Stable Diffusion Upscale script by Coyote-A."
        },
        {
            "author": "ssitu",
            "title": "Restart Sampling",
            "id": "restart-sampling",
            "reference": "https://github.com/ssitu/ComfyUI_restart_sampling",
            "files": [
                "https://github.com/ssitu/ComfyUI_restart_sampling"
            ],
            "install_type": "git-clone",
            "description": "Unofficial ComfyUI nodes for restart sampling based on the paper 'Restart Sampling for Improving Generative Processes' ([a/paper](https://arxiv.org/abs/2306.14878), [a/repo](https://github.com/Newbeeer/diffusion_restart_sampling))"
        },
        {
            "author": "ssitu",
            "title": "ComfyUI roop",
            "id": "roop",
            "reference": "https://github.com/ssitu/ComfyUI_roop",
            "files": [
                "https://github.com/ssitu/ComfyUI_roop"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI nodes for the roop A1111 webui script."
        },
        {
            "author": "ssitu",
            "title": "ComfyUI fabric",
            "id": "fabric",
            "reference": "https://github.com/ssitu/ComfyUI_fabric",
            "files": [
                "https://github.com/ssitu/ComfyUI_fabric"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI nodes based on the paper [a/FABRIC: Personalizing Diffusion Models with Iterative Feedback](https://arxiv.org/abs/2307.10159) (Feedback via Attention-Based Reference Image Conditioning)"
        },
        {
            "author": "space-nuko",
            "title": "Disco Diffusion",
            "id": "disco",
            "reference": "https://github.com/space-nuko/ComfyUI-Disco-Diffusion",
            "files": [
                "https://github.com/space-nuko/ComfyUI-Disco-Diffusion"
            ],
            "install_type": "git-clone",
            "description": "Modularized version of Disco Diffusion for use with ComfyUI."
        },
        {
            "author": "space-nuko",
            "title": "OpenPose Editor",
            "id": "openpose-editor",
            "reference": "https://github.com/space-nuko/ComfyUI-OpenPose-Editor",
            "files": [
                "https://github.com/space-nuko/ComfyUI-OpenPose-Editor"
            ],
            "install_type": "git-clone",
            "description": "A port of the openpose-editor extension for stable-diffusion-webui. NOTE: Requires [a/this ComfyUI patch](https://github.com/comfyanonymous/ComfyUI/pull/711) to work correctly"
        },
        {
            "author": "space-nuko",
            "title": "nui suite",
            "id": "nui",
            "reference": "https://github.com/space-nuko/nui-suite",
            "files": [
                "https://github.com/space-nuko/nui-suite"
            ],
            "install_type": "git-clone",
            "description": "NODES: Dynamic Prompts Text Encode, Feeling Lucky Text Encode, Output String"
        },
        {
            "author": "Nourepide",
            "title": "Allor Plugin",
            "id": "allor",
            "reference": "https://github.com/Nourepide/ComfyUI-Allor",
            "files": [
                "https://github.com/Nourepide/ComfyUI-Allor"
            ],
            "install_type": "git-clone",
            "description": "Allor is a plugin for ComfyUI with an emphasis on transparency and performance."
        },
        {
            "author": "melMass",
            "title": "MTB Nodes",
            "id": "mtb",
            "reference": "https://github.com/melMass/comfy_mtb",
            "files": [
                "https://github.com/melMass/comfy_mtb"
            ],
            "nodename_pattern": "\\(mtb\\)$",
            "install_type": "git-clone",
            "description": "NODES: Face Swap, Film Interpolation, Latent Lerp, Int To Number, Bounding Box, Crop, Uncrop, ImageBlur, Denoise, ImageCompare, RGV to HSV, HSV to RGB, Color Correct, Modulo, Deglaze Image, Smart Step, ..."
        },
        {
            "author": "xXAdonesXx",
            "title": "NodeGPT",
            "id": "nodegpt",
            "reference": "https://github.com/xXAdonesXx/NodeGPT",
            "files": [
                "https://github.com/xXAdonesXx/NodeGPT"
            ],
            "install_type": "git-clone",
            "description": "Implementation of AutoGen inside ComfyUI. This repository is under development, and not everything is functioning correctly yet."
        },
        {
            "author": "Suzie1",
            "title": "Comfyroll Studio",
            "id": "comfyroll",
            "reference": "https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes",
            "files": [
                "https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes"
            ],
            "install_type": "git-clone",
            "description": "Custom nodes for SDXL and SD1.5 including Multi-ControlNet, LoRA, Aspect Ratio, Process Switches, and many more nodes. NOTE: Maintainer is changed to Suzie1 from RockOfFire. [w/Using an outdated version has resulted in reported issues with updates not being applied. Trying to reinstall the software is advised.]"
        },
        {
            "author": "bmad4ever",
            "title": "ComfyUI-Bmad-DirtyUndoRedo",
            "reference": "https://github.com/bmad4ever/ComfyUI-Bmad-DirtyUndoRedo",
            "files": [
                "https://github.com/bmad4ever/ComfyUI-Bmad-DirtyUndoRedo"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI extension that adds undo (and redo) functionality."
        },
        {
            "author": "bmad4ever",
            "title": "Bmad Nodes",
            "id": "bmad",
            "reference": "https://github.com/bmad4ever/comfyui_bmad_nodes",
            "files": [
                "https://github.com/bmad4ever/comfyui_bmad_nodes"
            ],
            "install_type": "git-clone",
            "description": "This custom node offers the following functionalities: API support for setting up API requests, computer vision primarily for masking or collages, and general utility to streamline workflow setup or implement essential missing features."
        },
        {
            "author": "bmad4ever",
            "title": "comfyui_ab_sampler",
            "id": "ab-sampler",
            "reference": "https://github.com/bmad4ever/comfyui_ab_samplercustom",
            "files": [
                "https://github.com/bmad4ever/comfyui_ab_samplercustom"
            ],
            "install_type": "git-clone",
            "description": "Experimental sampler node. Sampling alternates between A and B inputs until only one remains, starting with A. B steps run over a 2x2 grid, where 3/4's of the grid are copies of the original input latent. When the optional mask is used, the region outside the defined roi is copied from the original latent at the end of every step."
        },
        {
            "author": "bmad4ever",
            "title": "Lists Cartesian Product",
            "reference": "https://github.com/bmad4ever/comfyui_lists_cartesian_product",
            "files": [
                "https://github.com/bmad4ever/comfyui_lists_cartesian_product"
            ],
            "install_type": "git-clone",
            "description": "Given a set of lists, the node adjusts them so that when used as input to another node all the possible argument permutations are computed."
        },
        {
            "author": "bmad4ever",
            "title": "comfyui_wfc_like",
            "id": "wfc",
            "reference": "https://github.com/bmad4ever/comfyui_wfc_like",
            "files": [
                "https://github.com/bmad4ever/comfyui_wfc_like"
            ],
            "install_type": "git-clone",
            "description": "An 'opinionated' Wave Function Collapse implementation with a set of nodes for comfyui"
        },
        {
            "author": "bmad4ever",
            "title": "comfyui_quilting",
            "id": "quilting",
            "reference": "https://github.com/bmad4ever/comfyui_quilting",
            "files": [
                "https://github.com/bmad4ever/comfyui_quilting"
            ],
            "install_type": "git-clone",
            "description": "image and latent quilting nodes for comfyui"
        },
        {
            "author": "FizzleDorf",
            "title": "FizzNodes",
            "id": "fizz",
            "reference": "https://github.com/FizzleDorf/ComfyUI_FizzNodes",
            "files": [
                "https://github.com/FizzleDorf/ComfyUI_FizzNodes"
            ],
            "install_type": "git-clone",
            "description": "Scheduled prompts, scheduled float/int values and wave function nodes for animations and utility. compatable with [a/framesync](https://www.framesync.xyz/) and [a/keyframe-string-generator](https://www.chigozie.co.uk/keyframe-string-generator/) for audio synced animations in Comfyui."
        },
        {
            "author": "FizzleDorf",
            "title": "ComfyUI-AIT",
            "id": "ait",
            "reference": "https://github.com/FizzleDorf/ComfyUI-AIT",
            "files": [
                "https://github.com/FizzleDorf/ComfyUI-AIT"
            ],
            "install_type": "git-clone",
            "description": "A ComfyUI implementation of Facebook Meta's [a/AITemplate](https://github.com/facebookincubator/AITemplate) repo for faster inference using cpp/cuda. This new repo is behind the old version but is a much more stable foundation to keep AIT online. Please be patient as the repo will eventually include the same features as before.\nNOTE: You can find the old AIT extension in the legacy channel."
        },
        {
            "author": "filipemeneses",
            "title": "Pixelization",
            "id": "pixelization",
            "reference": "https://github.com/filipemeneses/comfy_pixelization",
            "files": [
                "https://github.com/filipemeneses/comfy_pixelization"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI node that pixelizes images."
        },
        {
            "author": "shiimizu",
            "title": "smZNodes",
            "id": "smz",
            "reference": "https://github.com/shiimizu/ComfyUI_smZNodes",
            "files": [
                "https://github.com/shiimizu/ComfyUI_smZNodes"
            ],
            "install_type": "git-clone",
            "description": "NODES: CLIP Text Encode++. Achieve identical embeddings from stable-diffusion-webui for ComfyUI."
        },
        {
            "author": "shiimizu",
            "title": "Tiled Diffusion & VAE for ComfyUI",
            "id": "tiled-diffusion",
            "reference": "https://github.com/shiimizu/ComfyUI-TiledDiffusion",
            "files": [
                "https://github.com/shiimizu/ComfyUI-TiledDiffusion"
            ],
            "install_type": "git-clone",
            "description": "The extension enables large image drawing & upscaling with limited VRAM via the following techniques:\n1.Two SOTA diffusion tiling algorithms: [a/Mixture of Diffusers](https://github.com/albarji/mixture-of-diffusers) and [a/MultiDiffusion](https://github.com/omerbt/MultiDiffusion)\n2.pkuliyi2015's Tiled VAE algorithm."
        },
        {
            "author": "ZaneA",
            "title": "ImageReward",
            "reference": "https://github.com/ZaneA/ComfyUI-ImageReward",
            "files": [
                "https://github.com/ZaneA/ComfyUI-ImageReward"
            ],
            "install_type": "git-clone",
            "description": "NODES: ImageRewardLoader, ImageRewardScore"
        },
        {
            "author": "SeargeDP",
            "title": "SeargeSDXL",
            "id": "searge",
            "reference": "https://github.com/SeargeDP/SeargeSDXL",
            "files": [
                "https://github.com/SeargeDP/SeargeSDXL"
            ],
            "install_type": "git-clone",
            "description": "Custom nodes for easier use of SDXL in ComfyUI including an img2img workflow that utilizes both the base and refiner checkpoints."
        },
        {
            "author": "cubiq",
            "title": "Simple Math",
            "id": "simplemath",
            "reference": "https://github.com/cubiq/ComfyUI_SimpleMath",
            "files": [
                "https://github.com/cubiq/ComfyUI_SimpleMath"
            ],
            "install_type": "git-clone",
            "description": "custom node for ComfyUI to perform simple math operations"
        },
        {
            "author": "cubiq",
            "title": "ComfyUI_IPAdapter_plus",
            "id": "ipadapter",
            "reference": "https://github.com/cubiq/ComfyUI_IPAdapter_plus",
            "files": [
                "https://github.com/cubiq/ComfyUI_IPAdapter_plus"
            ],
            "pip": ["insightface"],
            "install_type": "git-clone",
            "description": "ComfyUI reference implementation for IPAdapter models. The code is mostly taken from the original IPAdapter repository and laksjdjf's implementation, all credit goes to them. I just made the extension closer to ComfyUI philosophy."
        },
        {
            "author": "cubiq",
            "title": "ComfyUI InstantID (Native Support)",
            "id": "instantid",
            "reference": "https://github.com/cubiq/ComfyUI_InstantID",
            "files": [
                "https://github.com/cubiq/ComfyUI_InstantID"
            ],
            "install_type": "git-clone",
            "description": "Native [a/InstantID](https://github.com/InstantID/InstantID) support for ComfyUI.\nThis extension differs from the many already available as it doesn't use diffusers but instead implements InstantID natively and it fully integrates with ComfyUI.\nPlease note this still could be considered beta stage, looking forward to your feedback."
        },
        {
            "author": "cubiq",
            "title": "Face Analysis for ComfyUI",
            "id": "faceanalysis",
            "reference": "https://github.com/cubiq/ComfyUI_FaceAnalysis",
            "files": [
                "https://github.com/cubiq/ComfyUI_FaceAnalysis"
            ],
            "install_type": "git-clone",
            "description": "This extension uses [a/DLib](http://dlib.net/) to calculate the Euclidean and Cosine distance between two faces.\nNOTE: Install the Shape Predictor, Face Recognition model from the Install models menu."
        },
        {
            "author": "cubiq",
            "title": "PuLID_ComfyUI",
            "id": "pulid",
            "reference": "https://github.com/cubiq/PuLID_ComfyUI",
            "files": [
                "https://github.com/cubiq/PuLID_ComfyUI"
            ],
            "install_type": "git-clone",
            "description": "[a/PuLID](https://github.com/ToTheBeginning/PuLID) ComfyUI native implementation."
        },
        {
            "author": "shockz0rz",
            "title": "InterpolateEverything",
            "id": "interpolate-everything",
            "reference": "https://github.com/shockz0rz/ComfyUI_InterpolateEverything",
            "files": [
                "https://github.com/shockz0rz/ComfyUI_InterpolateEverything"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Interpolate Poses, Interpolate Lineart, ... Custom nodes for interpolating between, well, everything in the Stable Diffusion ComfyUI."
        },
        {
            "author": "shockz0rz",
            "title": "comfy-easy-grids",
            "id": "easy-grids",
            "reference": "https://github.com/shockz0rz/comfy-easy-grids",
            "files": [
                "https://github.com/shockz0rz/comfy-easy-grids"
            ],
            "install_type": "git-clone",
            "description": "A set of custom nodes for creating image grids, sequences, and batches in ComfyUI."
        },
        {
            "author": "yolanother",
            "title": "Comfy UI Prompt Agent",
            "id": "prompt-agent",
            "reference": "https://github.com/yolanother/DTAIComfyPromptAgent",
            "files": [
                "https://github.com/yolanother/DTAIComfyPromptAgent"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Prompt Agent, Prompt Agent (String). This script provides a prompt agent node for the Comfy UI stable diffusion client."
        },
        {
            "author": "yolanother",
            "title": "Image to Text Node",
            "id": "dta-img2txt",
            "reference": "https://github.com/yolanother/DTAIImageToTextNode",
            "files": [
                "https://github.com/yolanother/DTAIImageToTextNode"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Image URL to Text, Image to Text."
        },
        {
            "author": "yolanother",
            "title": "Comfy UI Online Loaders",
            "id": "dta-loader",
            "reference": "https://github.com/yolanother/DTAIComfyLoaders",
            "files": [
                "https://github.com/yolanother/DTAIComfyLoaders"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Submit Image (Parameters), Submit Image. A collection of loaders that use a shared common online data source rather than relying on the files to be present locally."
        },
        {
            "author": "yolanother",
            "title": "Comfy AI DoubTech.ai Image Sumission Node",
            "id": "dta-submit",
            "reference": "https://github.com/yolanother/DTAIComfyImageSubmit",
            "files": [
                "https://github.com/yolanother/DTAIComfyImageSubmit"
            ],
            "install_type": "git-clone",
            "description": "A ComfyAI submit node to upload images to DoubTech.ai"
        },
        {
            "author": "yolanother",
            "title": "Comfy UI QR Codes",
            "id": "dta-qr",
            "reference": "https://github.com/yolanother/DTAIComfyQRCodes",
            "files": [
                "https://github.com/yolanother/DTAIComfyQRCodes"
            ],
            "install_type": "git-clone",
            "description": "This extension introduces QR code nodes for the Comfy UI stable diffusion client. NOTE: ComfyUI qrcode extension required."
        },
        {
            "author": "yolanother",
            "title": "Variables for Comfy UI",
            "id": "dta-var",
            "reference": "https://github.com/yolanother/DTAIComfyVariables",
            "files": [
                "https://github.com/yolanother/DTAIComfyVariables"
            ],
            "install_type": "git-clone",
            "description": "Nodes: String, Int, Float, Short String, CLIP Text Encode (With Variables), String Format, Short String Format. This extension introduces quality of life improvements by providing variable nodes and shared global variables."
        },
        {
            "author": "sipherxyz",
            "title": "comfyui-art-venture",
            "id": "artventure",
            "reference": "https://github.com/sipherxyz/comfyui-art-venture",
            "files": [
                "https://github.com/sipherxyz/comfyui-art-venture"
            ],
            "install_type": "git-clone",
            "description": "Nodes: ImagesConcat, LoadImageFromUrl, AV_UploadImage"
        },
        {
            "author": "SOELexicon",
            "title": "LexMSDBNodes",
            "id": "lexmsdb",
            "reference": "https://github.com/SOELexicon/ComfyUI-LexMSDBNodes",
            "files": [
                "https://github.com/SOELexicon/ComfyUI-LexMSDBNodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes: MSSqlTableNode, MSSqlSelectNode. This extension provides custom nodes to interact with MSSQL."
        },
        {
            "author": "pants007",
            "title": "pants",
            "reference": "https://github.com/pants007/comfy-pants",
            "files": [
                "https://github.com/pants007/comfy-pants"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Make Square Node, Interrogate Node, TextEncodeAIO"
        },
        {
            "author": "evanspearman",
            "title": "ComfyMath",
            "id": "comfymath",
            "reference": "https://github.com/evanspearman/ComfyMath",
            "files": [
                "https://github.com/evanspearman/ComfyMath"
            ],
            "install_type": "git-clone",
            "description": "Provides Math Nodes for ComfyUI. Boolean Logic, Integer Arithmetic, Floating Point Arithmetic and Functions, Vec2, Vec3, and Vec4 Arithmetic and Functions"
        },
        {
            "author": "civitai",
            "title": "comfy-nodes",
            "id": "civitai",
            "reference": "https://github.com/civitai/comfy-nodes",
            "files": [
                "https://github.com/civitai/comfy-nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes: CivitAI_Loaders. Load Checkpoints, and LORA models directly from CivitAI API."
        },
        {
            "author": "andersxa",
            "title": "CLIP Directional Prompt Attention",
            "id": "prompt-attention",
            "reference": "https://github.com/andersxa/comfyui-PromptAttention",
            "files": [
                "https://github.com/andersxa/comfyui-PromptAttention"
            ],
            "pip": ["scikit-learn", "matplotlib"],
            "install_type": "git-clone",
            "description": "Nodes: CLIP Directional Prompt Attention Encode. Direction prompt attention tries to solve the problem of contextual words (or parts of the prompt) having an effect on much later or irrelevant parts of the prompt."
        },
        {
            "author": "ArtVentureX",
            "title": "AnimateDiff",
            "reference": "https://github.com/ArtVentureX/comfyui-animatediff",
            "pip": ["flash_attn"],
            "files": [
                "https://github.com/ArtVentureX/comfyui-animatediff"
            ],
            "install_type": "git-clone",
            "description": "AnimateDiff integration for ComfyUI, adapts from sd-webui-animatediff.\n[w/You only need to download one of [a/mm_sd_v14.ckpt](https://huggingface.co/guoyww/animatediff/resolve/main/mm_sd_v14.ckpt) | [a/mm_sd_v15.ckpt](https://huggingface.co/guoyww/animatediff/resolve/main/mm_sd_v15.ckpt). Put the model weights under %%ComfyUI/custom_nodes/comfyui-animatediff/models%%. DO NOT change model filename.]"
        },
        {
            "author": "twri",
            "title": "SDXL Prompt Styler",
            "id": "twri-styler",
            "reference": "https://github.com/twri/sdxl_prompt_styler",
            "files": [
                "https://github.com/twri/sdxl_prompt_styler"
            ],
            "install_type": "git-clone",
            "description": "SDXL Prompt Styler is a node that enables you to style prompts based on predefined templates stored in a JSON file."
        },
        {
            "author": "wolfden",
            "title": "SDXL Prompt Styler (customized version by wolfden)",
            "id": "wolfden-styler",
            "reference": "https://github.com/wolfden/ComfyUi_PromptStylers",
            "files": [
                "https://github.com/wolfden/ComfyUi_PromptStylers"
            ],
            "install_type": "git-clone",
            "description": "These custom nodes provide a variety of customized prompt stylers based on [a/twri/SDXL Prompt Styler](https://github.com/twri/sdxl_prompt_styler)."
        },
        {
            "author": "wolfden",
            "title": "ComfyUi_String_Function_Tree",
            "id": "str-func-tree",
            "reference": "https://github.com/wolfden/ComfyUi_String_Function_Tree",
            "files": [
                "https://github.com/wolfden/ComfyUi_String_Function_Tree"
            ],
            "install_type": "git-clone",
            "description": "This custom node provides the capability to manipulate multiple string inputs."
        },
        {
            "author": "daxthin",
            "title": "DZ-FaceDetailer",
            "id": "dz-facedetailer",
            "reference": "https://github.com/daxthin/DZ-FaceDetailer",
            "files": [
                "https://github.com/daxthin/DZ-FaceDetailer"
            ],
            "install_type": "git-clone",
            "description": "Face Detailer is a custom node for the 'ComfyUI' framework inspired by !After Detailer extension from auto1111, it allows you to detect faces using Mediapipe and YOLOv8n to create masks for the detected faces."
        },
        {
            "author": "asagi4",
            "title": "ComfyUI prompt control",
            "id": "prompt-control",
            "reference": "https://github.com/asagi4/comfyui-prompt-control",
            "files": [
                "https://github.com/asagi4/comfyui-prompt-control"
            ],
            "install_type": "git-clone",
            "description": "Nodes for convenient prompt editing. The aim is to make basic generations in ComfyUI completely prompt-controllable."
        },
        {
            "author": "asagi4",
            "title": "ComfyUI-CADS",
            "id": "cads",
            "reference": "https://github.com/asagi4/ComfyUI-CADS",
            "files": [
                "https://github.com/asagi4/ComfyUI-CADS"
            ],
            "install_type": "git-clone",
            "description": "Attempts to implement [a/CADS](https://arxiv.org/abs/2310.17347) for ComfyUI. Credit also to the [a/A1111 implementation](https://github.com/v0xie/sd-webui-cads/tree/main) that I used as a reference."
        },
        {
            "author": "asagi4",
            "title": "asagi4/comfyui-utility-nodes",
            "id": "asagi-nodes",
            "reference": "https://github.com/asagi4/comfyui-utility-nodes",
            "files": [
                "https://github.com/asagi4/comfyui-utility-nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes:MUJinjaRender, MUSimpleWildcard"
        },
        {
            "author": "jamesWalker55",
            "title": "ComfyUI - P2LDGAN Node",
            "id": "p2ldgan",
            "reference": "https://github.com/jamesWalker55/comfyui-p2ldgan",
            "files": [
                "https://github.com/jamesWalker55/comfyui-p2ldgan"
            ],
            "install_type": "git-clone",
            "description": "Nodes: P2LDGAN. This integrates P2LDGAN into ComfyUI. P2LDGAN extracts lineart from input images.\n[w/To use this extension, you need to download the [a/p2ldgan model](https://drive.google.com/file/d/1To4V_Btc3QhCLBWZ0PdSNgC1cbm3isHP) and save it in the %%ComfyUI/custom_nodes/comfyui-p2ldgan/checkpoints%% directory.]"
        },
        {
            "author": "jamesWalker55",
            "title": "Various ComfyUI Nodes by Type",
            "id": "jameswalker-nodes",
            "reference": "https://github.com/jamesWalker55/comfyui-various",
            "files": [
                "https://github.com/jamesWalker55/comfyui-various"
            ],
            "nodename_pattern": "^JW",
            "install_type": "git-clone",
            "description": "Nodes: JWInteger, JWFloat, JWString, JWImageLoadRGB, JWImageResize, ..."
        },
        {
            "author": "adieyal",
            "title": "DynamicPrompts Custom Nodes",
            "id": "dynamicprompt",
            "reference": "https://github.com/adieyal/comfyui-dynamicprompts",
            "files": [
                "https://github.com/adieyal/comfyui-dynamicprompts"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Random Prompts, Combinatorial Prompts, I'm Feeling Lucky, Magic Prompt, Jinja2 Templates. ComfyUI-DynamicPrompts is a custom nodes library that integrates into your existing ComfyUI Library. It provides nodes that enable the use of Dynamic Prompts in your ComfyUI."
        },
        {
            "author": "mihaiiancu",
            "title": "mihaiiancu/Inpaint",
            "id": "inpaint",
            "reference": "https://github.com/mihaiiancu/ComfyUI_Inpaint",
            "files": [
                "https://github.com/mihaiiancu/ComfyUI_Inpaint"
            ],
            "install_type": "git-clone",
            "description": "Nodes: InpaintMediapipe. This node provides a simple interface to inpaint."
        },
        {
            "author": "kwaroran",
            "title": "abg-comfyui",
            "id": "abg",
            "reference": "https://github.com/kwaroran/abg-comfyui",
            "files": [
                "https://github.com/kwaroran/abg-comfyui"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Remove Image Background (abg). A Anime Background Remover node for comfyui, based on this hf space, works same as AGB extention in automatic1111."
        },
        {
            "author": "bash-j",
            "title": "Mikey Nodes",
            "id": "mikey",
            "reference": "https://github.com/bash-j/mikey_nodes",
            "files": [
                "https://github.com/bash-j/mikey_nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Prompt With Style, Prompt With SDXL, Resize Image for SDXL, Save Image With Prompt Data, HaldCLUT, Empty Latent Ratio Select/Custom SDXL"
        },
        {
            "author": "failfa.st",
            "title": "failfast-comfyui-extensions",
            "id": "failfast",
            "reference": "https://github.com/failfa-st/failfast-comfyui-extensions",
            "files": [
                "https://github.com/failfa-st/failfast-comfyui-extensions"
            ],
            "install_type": "git-clone",
            "description": "node color customization, custom colors, dot reroutes, link rendering options, straight lines, group freezing, node pinning, automated arrangement of nodes, copy image\nNOTE: This repo is identical to 'blibla-comfyui-extensions'."
        },
        {
            "author": "Pfaeff",
            "title": "pfaeff-comfyui",
            "id": "pfaeff",
            "reference": "https://github.com/Pfaeff/pfaeff-comfyui",
            "files": [
                "https://github.com/Pfaeff/pfaeff-comfyui"
            ],
            "install_type": "git-clone",
            "description": "Nodes: AstropulsePixelDetector, BackgroundRemover, ImagePadForBetterOutpaint, InpaintingPipelineLoader, Inpainting, ..."
        },
        {
            "author": "wallish77",
            "title": "wlsh_nodes",
            "id": "wlsh",
            "reference": "https://github.com/wallish77/wlsh_nodes",
            "files": [
                "https://github.com/wallish77/wlsh_nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Checkpoint Loader with Name, Save Prompt Info, Outpaint to Image, CLIP Positive-Negative, SDXL Quick Empty Latent, Empty Latent by Ratio, Time String, SDXL Steps, SDXL Resolutions ..."
        },
        {
            "author": "Kosinkadink",
            "title": "ComfyUI-Advanced-ControlNet",
            "id": "adv-cnet",
            "reference": "https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet",
            "files": [
                "https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet"
            ],
            "install_type": "git-clone",
            "description": "Nodes: ControlNetLoaderAdvanced, DiffControlNetLoaderAdvanced, ScaledSoftControlNetWeights, SoftControlNetWeights, CustomControlNetWeights, SoftT2IAdapterWeights, CustomT2IAdapterWeights"
        },
        {
            "author": "Kosinkadink",
            "title": "AnimateDiff Evolved",
            "id": "ad-evolved",
            "reference": "https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved",
            "files": [
                "https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved"
            ],
            "install_type": "git-clone",
            "description": "A forked repository that actively maintains [a/AnimateDiff](https://github.com/ArtVentureX/comfyui-animatediff), created by ArtVentureX.\n\nImproved AnimateDiff integration for ComfyUI, adapts from sd-webui-animatediff.\n[w/Download one or more motion models from [a/Original Models](https://huggingface.co/guoyww/animatediff/tree/main) | [a/Finetuned Models](https://huggingface.co/manshoety/AD_Stabilized_Motion/tree/main). See README for additional model links and usage. Put the model weights under %%ComfyUI/custom_nodes/ComfyUI-AnimateDiff-Evolved/models%%. You are free to rename the models, but keeping original names will ease use when sharing your workflow.]"
        },
        {
            "author": "Kosinkadink",
            "title": "ComfyUI-VideoHelperSuite",
            "id": "vhs",
            "reference": "https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite",
            "files": [
                "https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite"
            ],
            "install_type": "git-clone",
            "description": "Nodes: VHS_VideoCombine. Nodes related to video workflows"
        },
        {
            "author": "Gourieff",
            "title": "ReActor Node for ComfyUI",
            "id": "reactor",
            "reference": "https://github.com/Gourieff/comfyui-reactor-node",
            "files": [
                "https://github.com/Gourieff/comfyui-reactor-node"
            ],
            "install_type": "git-clone",
            "description": "The Fast and Simple 'roop-like' Face Swap Extension Node for ComfyUI, based on ReActor (ex Roop-GE) SD-WebUI Face Swap Extension"
        },
        {
            "author": "Gourieff",
            "title": "ComfyUI-FutureWarningIgnore",
            "id": "futureignore",
            "reference": "https://github.com/Gourieff/ComfyUI-FutureWarningIgnore",
            "files": [
                "https://github.com/Gourieff/ComfyUI-FutureWarningIgnore/raw/main/0_FutureWarningIgnore.py"
            ],
            "install_type": "copy",
            "description": "This extension collapses 'future warning'"
        },
        {
            "author": "imb101",
            "title": "FaceSwap",
            "id": "faceswap",
            "reference": "https://github.com/imb101/ComfyUI-FaceSwap",
            "files": [
                "https://github.com/imb101/ComfyUI-FaceSwap"
            ],
            "install_type": "git-clone",
            "description": "Nodes:FaceSwapNode. Very basic custom node to enable face swapping in ComfyUI. (roop)"
        },
        {
            "author": "Chaoses-Ib",
            "title": "ComfyUI_Ib_CustomNodes",
            "id": "ib-nodes",
            "reference": "https://github.com/Chaoses-Ib/ComfyUI_Ib_CustomNodes",
            "files": [
                "https://github.com/Chaoses-Ib/ComfyUI_Ib_CustomNodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes: LoadImageFromPath. Load Image From Path loads the image from the source path and does not have such problems."
        },
        {
            "author": "AIrjen",
            "title": "One Button Prompt",
            "id": "1button",
            "reference": "https://github.com/AIrjen/OneButtonPrompt",
            "files": [
                "https://github.com/AIrjen/OneButtonPrompt"
            ],
            "install_type": "git-clone",
            "description": "One Button Prompt has a prompt generation node for beginners who have problems writing a good prompt, or advanced users who want to get inspired. It generates an entire prompt from scratch. It is random, but controlled. You simply load up the script and press generate, and let it surprise you."
        },
        {
            "author": "coreyryanhanson",
            "title": "ComfyQR",
            "id": "comfyqr",
            "reference": "https://github.com/coreyryanhanson/ComfyQR",
            "files": [
                "https://github.com/coreyryanhanson/ComfyQR"
            ],
            "install_type": "git-clone",
            "description": "QR generation within ComfyUI. Contains nodes suitable for workflows from generating basic QR images to techniques with advanced QR masking."
        },
        {
            "author": "coreyryanhanson",
            "title": "ComfyQR-scanning-nodes",
            "id": "comfyqr-scanning",
            "reference": "https://github.com/coreyryanhanson/ComfyQR-scanning-nodes",
            "files": [
                "https://github.com/coreyryanhanson/ComfyQR-scanning-nodes"
            ],
            "install_type": "git-clone",
            "description": "A set of ComfyUI nodes to quickly test generated QR codes for scannability. A companion project to ComfyQR."
        },
        {
            "author": "dimtoneff",
            "title": "ComfyUI PixelArt Detector",
            "id": "pixelart-detector",
            "reference": "https://github.com/dimtoneff/ComfyUI-PixelArt-Detector",
            "files": [
                "https://github.com/dimtoneff/ComfyUI-PixelArt-Detector"
            ],
            "install_type": "git-clone",
            "description": "This node manipulates the pixel art image in ways that it should look pixel perfect (downscales, changes palette, upscales etc.)."
        },
        {
            "author": "dimtoneff",
            "title": "Eagle PNGInfo",
            "id": "eaglepnginfo",
            "reference": "https://github.com/hylarucoder/ComfyUI-Eagle-PNGInfo",
            "files": [
                "https://github.com/hylarucoder/ComfyUI-Eagle-PNGInfo"
            ],
            "install_type": "git-clone",
            "description": "Nodes: EagleImageNode"
        },
        {
            "author": "theUpsider",
            "title": "Styles CSV Loader Extension for ComfyUI",
            "id": "styles-csv-loader",
            "reference": "https://github.com/theUpsider/ComfyUI-Styles_CSV_Loader",
            "files": [
                "https://github.com/theUpsider/ComfyUI-Styles_CSV_Loader"
            ],
            "install_type": "git-clone",
            "description": "This extension allows users to load styles from a CSV file, primarily for migration purposes from the automatic1111 Stable Diffusion web UI."
        },
        {
            "author": "M1kep",
            "title": "Comfy_KepListStuff",
            "id": "keplist",
            "reference": "https://github.com/M1kep/Comfy_KepListStuff",
            "files": [
                "https://github.com/M1kep/Comfy_KepListStuff"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Range(Step), Range(Num Steps), List Length, Image Overlay, Stack Images, Empty Images, Join Image Lists, Join Float Lists. This extension provides various list manipulation nodes"
        },
        {
            "author": "M1kep",
            "title": "ComfyLiterals",
            "id": "comfyliterals",
            "reference": "https://github.com/M1kep/ComfyLiterals",
            "files": [
                "https://github.com/M1kep/ComfyLiterals"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Int, Float, String, Operation, Checkpoint"
        },
        {
            "author": "M1kep",
            "title": "KepPromptLang",
            "id": "kepprompt",
            "reference": "https://github.com/M1kep/KepPromptLang",
            "files": [
                "https://github.com/M1kep/KepPromptLang"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Build Gif, Special CLIP Loader. It offers various manipulation capabilities for the internal operations of the prompt."
        },
        {
            "author": "M1kep",
            "title": "Comfy_KepMatteAnything",
            "id": "kepmatte",
            "reference": "https://github.com/M1kep/Comfy_KepMatteAnything",
            "files": [
                "https://github.com/M1kep/Comfy_KepMatteAnything"
            ],
            "install_type": "git-clone",
            "description": "This extension provides a custom node that allows the use of [a/Matte Anything](https://github.com/hustvl/Matte-Anything) in ComfyUI."
        },
        {
            "author": "M1kep",
            "title": "Comfy_KepKitchenSink",
            "id": "kepkitchen",
            "reference": "https://github.com/M1kep/Comfy_KepKitchenSink",
            "files": [
                "https://github.com/M1kep/Comfy_KepKitchenSink"
            ],
            "install_type": "git-clone",
            "description": "Nodes: KepRotateImage"
        },
        {
            "author": "M1kep",
            "title": "ComfyUI-OtherVAEs",
            "id": "kep-othervae",
            "reference": "https://github.com/M1kep/ComfyUI-OtherVAEs",
            "files": [
                "https://github.com/M1kep/ComfyUI-OtherVAEs"
            ],
            "install_type": "git-clone",
            "description": "Nodes: TAESD VAE Decode"
        },
        {
            "author": "M1kep",
            "title": "ComfyUI-KepOpenAI",
            "id": "kep-openai",
            "reference": "https://github.com/M1kep/ComfyUI-KepOpenAI",
            "files": [
                "https://github.com/M1kep/ComfyUI-KepOpenAI"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI-KepOpenAI is a user-friendly node that serves as an interface to the GPT-4 with Vision (GPT-4V) API. This integration facilitates the processing of images coupled with text prompts, leveraging the capabilities of the OpenAI API to generate text completions that are contextually relevant to the provided inputs."
        },
        {
            "author": "uarefans",
            "title": "ComfyUI-Fans",
            "id": "fans",
            "reference": "https://github.com/uarefans/ComfyUI-Fans",
            "files": [
                "https://github.com/uarefans/ComfyUI-Fans"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Fans Styler (Max 10 Style), Fans Text Concat (Until 10 text)."
        },
        {
            "author": "NicholasMcCarthy",
            "title": "ComfyUI_TravelSuite",
            "id": "travel",
            "reference": "https://github.com/NicholasMcCarthy/ComfyUI_TravelSuite",
            "files": [
                "https://github.com/NicholasMcCarthy/ComfyUI_TravelSuite"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI custom nodes to apply various latent travel techniques."
        },
        {
            "author": "ManglerFTW",
            "title": "ComfyI2I",
            "id": "comfyi2i",
            "reference": "https://github.com/ManglerFTW/ComfyI2I",
            "files": [
                "https://github.com/ManglerFTW/ComfyI2I"
            ],
            "install_type": "git-clone",
            "description": "A set of custom nodes to perform image 2 image functions in ComfyUI."
        },
        {
            "author": "theUpsider",
            "title": "ComfyUI-Logic",
            "id": "comfy-logic",
            "reference": "https://github.com/theUpsider/ComfyUI-Logic",
            "files": [
                "https://github.com/theUpsider/ComfyUI-Logic"
            ],
            "install_type": "git-clone",
            "description": "An extension to ComfyUI that introduces logic nodes and conditional rendering capabilities."
        },
        {
            "author": "mpiquero7164",
            "title": "SaveImgPrompt",
            "id": "save-imgprompt",
            "reference": "https://github.com/mpiquero7164/ComfyUI-SaveImgPrompt",
            "files": [
                "https://github.com/mpiquero7164/ComfyUI-SaveImgPrompt"
            ],
            "install_type": "git-clone",
            "description": "Save a png or jpeg and option to save prompt/workflow in a text or json file for each image in Comfy + Workflow loading."
        },
        {
            "author": "m-sokes",
            "title": "ComfyUI Sokes Nodes",
            "id": "sokes",
            "reference": "https://github.com/m-sokes/ComfyUI-Sokes-Nodes",
            "files": [
                "https://github.com/m-sokes/ComfyUI-Sokes-Nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Empty Latent Randomizer (9 Inputs)"
        },
        {
            "author": "Extraltodeus",
            "title": "noise latent perlinpinpin",
            "id": "perlipinpin",
            "reference": "https://github.com/Extraltodeus/noise_latent_perlinpinpin",
            "files": [
                "https://github.com/Extraltodeus/noise_latent_perlinpinpin"
            ],
            "install_type": "git-clone",
            "description": "Nodes: NoisyLatentPerlin. This allows to create latent spaces filled with perlin-based noise that can actually be used by the samplers."
        },
        {
            "author": "Extraltodeus",
            "title": "LoadLoraWithTags",
            "reference": "https://github.com/Extraltodeus/LoadLoraWithTags",
            "files": [
                "https://github.com/Extraltodeus/LoadLoraWithTags"
            ],
            "install_type": "git-clone",
            "description": "Nodes:LoadLoraWithTags. Save/Load trigger words for loras from a json and auto fetch them on civitai if they are missing."
        },
        {
            "author": "Extraltodeus",
            "title": "sigmas_tools_and_the_golden_scheduler",
            "id": "sigmas-tools",
            "reference": "https://github.com/Extraltodeus/sigmas_tools_and_the_golden_scheduler",
            "files": [
                "https://github.com/Extraltodeus/sigmas_tools_and_the_golden_scheduler"
            ],
            "install_type": "git-clone",
            "description": "A few nodes to mix sigmas and a custom scheduler that uses phi, then one using eval() to be able to schedule with custom formulas."
        },
        {
            "author": "Extraltodeus",
            "title": "ComfyUI-AutomaticCFG",
            "id": "autocfg",
            "reference": "https://github.com/Extraltodeus/ComfyUI-AutomaticCFG",
            "files": [
                "https://github.com/Extraltodeus/ComfyUI-AutomaticCFG"
            ],
            "install_type": "git-clone",
            "description": "My own version 'from scratch' of a self-rescaling CFG. It isn't much but it's honest work.\nTLDR: set your CFG at 8 to try it. No burned images and artifacts anymore. CFG is also a bit more sensitive because it's a proportion around 8. Low scale like 4 also gives really nice results since your CFG is not the CFG anymore. Also in general even with relatively low settings it seems to improve the quality."
        },
        {
            "author": "Extraltodeus",
            "title": "Vector_Sculptor_ComfyUI",
            "id": "vector-sculptor",
            "reference": "https://github.com/Extraltodeus/Vector_Sculptor_ComfyUI",
            "files": [
                "https://github.com/Extraltodeus/Vector_Sculptor_ComfyUI"
            ],
            "install_type": "git-clone",
            "description": "The main node makes your conditioning go towards similar concepts so to enrich your composition or further away so to make it more precise. It gathers similar pre-cond vectors for as long as the cosine similarity score diminishes. If it climbs back it stops. This allows to set a relative direction to similar concepts.\nThere are examples at the end but [a/you can also check this imgur album](https://imgur.com/a/WvPd81Y) which demonstrates the capability of improving variety."
        },
        {
            "author": "JPS",
            "title": "JPS Custom Nodes for ComfyUI",
            "id": "jps-nodes",
            "reference": "https://github.com/JPS-GER/ComfyUI_JPS-Nodes",
            "files": [
                "https://github.com/JPS-GER/ComfyUI_JPS-Nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Various nodes to handle SDXL Resolutions, SDXL Basic Settings, IP Adapter Settings, Revision Settings, SDXL Prompt Styler, Crop Image to Square, Crop Image to Target Size, Get Date-Time String, Resolution Multiply, Largest Integer, 5-to-1 Switches for Integer, Images, Latents, Conditioning, Model, VAE, ControlNet"
        },
        {
            "author": "hustille",
            "title": "hus' utils for ComfyUI",
            "id": "husutil",
            "reference": "https://github.com/hustille/ComfyUI_hus_utils",
            "files": [
                "https://github.com/hustille/ComfyUI_hus_utils"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI nodes primarily for seed and filename generation"
        },
        {
            "author": "hustille",
            "title": "ComfyUI_Fooocus_KSampler",
            "id": "fooocus-ksampler",
            "reference": "https://github.com/hustille/ComfyUI_Fooocus_KSampler",
            "files": [
                "https://github.com/hustille/ComfyUI_Fooocus_KSampler"
            ],
            "install_type": "git-clone",
            "description": "Nodes: KSampler With Refiner (Fooocus). The KSampler from [a/Fooocus](https://github.com/lllyasviel/Fooocus) as a ComfyUI node [w/NOTE: This patches basic ComfyUI behaviour - don't use together with other samplers. Or perhaps do? Other samplers might profit from those changes ... ymmv.]"
        },
        {
            "author": "badjeff",
            "title": "LoRA Tag Loader for ComfyUI",
            "id": "lora-tag-loader",
            "reference": "https://github.com/badjeff/comfyui_lora_tag_loader",
            "files": [
                "https://github.com/badjeff/comfyui_lora_tag_loader"
            ],
            "install_type": "git-clone",
            "description": "A ComfyUI custom node to read LoRA tag(s) from text and load it into checkpoint model."
        },
        {
            "author": "rgthree",
            "title": "rgthree's ComfyUI Nodes",
            "id": "rgthree",
            "reference": "https://github.com/rgthree/rgthree-comfy",
            "files": [
                "https://github.com/rgthree/rgthree-comfy"
            ],
            "nodename_pattern": " \\(rgthree\\)$",
            "install_type": "git-clone",
            "description": "Nodes: Seed, Reroute, Context, Lora Loader Stack, Context Switch, Fast Muter. These custom nodes helps organize the building of complex workflows."
        },
        {
            "author": "AIGODLIKE",
            "title": "AIGODLIKE-COMFYUI-TRANSLATION",
            "id": "translation",
            "reference": "https://github.com/AIGODLIKE/AIGODLIKE-COMFYUI-TRANSLATION",
            "files": [
                "https://github.com/AIGODLIKE/AIGODLIKE-COMFYUI-TRANSLATION"
            ],
            "install_type": "git-clone",
            "description": "It provides language settings. (Contribution from users of various languages is needed due to the support for each language.)"
        },
        {
            "author": "AIGODLIKE",
            "title": "AIGODLIKE-ComfyUI-Studio",
            "id": "comfy-studio",
            "reference": "https://github.com/AIGODLIKE/AIGODLIKE-ComfyUI-Studio",
            "files": [
                "https://github.com/AIGODLIKE/AIGODLIKE-ComfyUI-Studio"
            ],
            "install_type": "git-clone",
            "description": "Improve the interactive experience of using ComfyUI, such as making the loading of ComfyUI models more intuitive and making it easier to create model thumbnails"
        },
        {
            "author": "AIGODLIKE",
            "title": "ComfyUI-CUP",
            "id": "comfycup",
            "reference": "https://github.com/AIGODLIKE/ComfyUI-CUP",
            "files": [
                "https://github.com/AIGODLIKE/ComfyUI-CUP"
            ],
            "install_type": "git-clone",
            "description": "Bridge between ComfyUI and blender's ComfyUI-BlenderAI-node addon."
        },
        {
            "author": "syllebra",
            "title": "BilboX's ComfyUI Custom Nodes",
            "id": "bilbox",
            "reference": "https://github.com/syllebra/bilbox-comfyui",
            "files": [
                "https://github.com/syllebra/bilbox-comfyui"
            ],
            "install_type": "git-clone",
            "description": "Nodes: BilboX's PromptGeek Photo Prompt. This provides a convenient way to compose photorealistic prompts into ComfyUI."
        },
        {
            "author": "Girish Gopaul",
            "title": "Save Image with Generation Metadata",
            "id": "image-saver",
            "reference": "https://github.com/giriss/comfy-image-saver",
            "files": [
                "https://github.com/giriss/comfy-image-saver"
            ],
            "install_type": "git-clone",
            "description": "All the tools you need to save images with their generation metadata on ComfyUI. Compatible with Civitai & Prompthero geninfo auto-detection. Works with png, jpeg and webp."
        },
        {
            "author": "shingo1228",
            "title": "ComfyUI-send-Eagle(slim)",
            "id": "send-eagle",
            "reference": "https://github.com/shingo1228/ComfyUI-send-eagle-slim",
            "files": [
                "https://github.com/shingo1228/ComfyUI-send-eagle-slim"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Send Webp Image to Eagle. This is an extension node for ComfyUI that allows you to send generated images in webp format to Eagle. This extension node is a re-implementation of the Eagle linkage functions of the previous ComfyUI-send-Eagle node, focusing on the functions required for this node."
        },
        {
            "author": "shingo1228",
            "title": "ComfyUI-SDXL-EmptyLatentImage",
            "id": "sdxl-emptylatent",
            "reference": "https://github.com/shingo1228/ComfyUI-SDXL-EmptyLatentImage",
            "files": [
                "https://github.com/shingo1228/ComfyUI-SDXL-EmptyLatentImage"
            ],
            "install_type": "git-clone",
            "description": "Nodes:SDXL Empty Latent Image. An extension node for ComfyUI that allows you to select a resolution from the pre-defined json files and output a Latent Image."
        },
        {
            "author": "laksjdjf",
            "title": "pfg-ComfyUI",
            "id": "pfg",
            "reference": "https://github.com/laksjdjf/pfg-ComfyUI",
            "files": [
                "https://github.com/laksjdjf/pfg-ComfyUI"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI version of https://github.com/laksjdjf/pfg-webui. (To use this extension, you need to download the required model file from **Install Models**)"
        },
        {
            "author": "laksjdjf",
            "title": "attention-couple-ComfyUI",
            "id": "attention-couple",
            "reference": "https://github.com/laksjdjf/attention-couple-ComfyUI",
            "files": [
                "https://github.com/laksjdjf/attention-couple-ComfyUI"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Attention couple. This is a custom node that manipulates region-specific prompts. While vanilla ComfyUI employs an area specification method based on latent couples, this node divides regions using attention layers within UNet."
        },
        {
            "author": "laksjdjf",
            "title": "cd-tuner_negpip-ComfyUI",
            "id": "cdtuner",
            "reference": "https://github.com/laksjdjf/cd-tuner_negpip-ComfyUI",
            "files": [
                "https://github.com/laksjdjf/cd-tuner_negpip-ComfyUI"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Apply CDTuner, Apply Negapip. This extension provides the [a/CD(Color/Detail) Tuner](https://github.com/hako-mikan/sd-webui-cd-tuner) and the [a/Negative Prompt in the Prompt](https://github.com/hako-mikan/sd-webui-negpip) features."
        },
        {
            "author": "laksjdjf",
            "title": "LCMSampler-ComfyUI",
            "id": "lcm-sampler",
            "reference": "https://github.com/laksjdjf/LCMSampler-ComfyUI",
            "files": [
                "https://github.com/laksjdjf/LCMSampler-ComfyUI"
            ],
            "install_type": "git-clone",
            "description": "This extension node is intended for the use of LCM conversion for SSD-1B-anime. It does not guarantee operation with the original LCM (as it cannot load weights in the current version). To take advantage of fast generation with LCM, a node for using TAESD as a decoder is also provided. This is inspired by ComfyUI-OtherVAEs."
        },
        {
            "author": "laksjdjf",
            "title": "LoRTnoC-ComfyUI",
            "id": "lortnoc",
            "reference": "https://github.com/laksjdjf/LoRTnoC-ComfyUI",
            "files": [
                "https://github.com/laksjdjf/LoRTnoC-ComfyUI"
            ],
            "install_type": "git-clone",
            "description": "This is a repository for using LoRTnoC (LoRA with hint block of ControlNet) on ComfyUI.\nNOTE:Please place the model file in the same location as controlnet. (Is this too arbitrary?)"
        },
        {
            "author": "laksjdjf",
            "title": "Batch-Condition-ComfyUI",
            "id": "batch-condition",
            "reference": "https://github.com/laksjdjf/Batch-Condition-ComfyUI",
            "files": [
                "https://github.com/laksjdjf/Batch-Condition-ComfyUI"
            ],
            "install_type": "git-clone",
            "description": "Nodes:CLIP Text Encode (Batch), String Input, Batch String"
        },
        {
            "author": "laksjdjf",
            "title": "cgem156-ComfyUI🍌",
            "id": "cgem156",
            "reference": "https://github.com/laksjdjf/cgem156-ComfyUI",
            "files": [
                "https://github.com/laksjdjf/cgem156-ComfyUI"
            ],
            "install_type": "git-clone",
            "description": "The custom nodes of laksjdjf have been integrated into the node pack of cgem156🍌."
        },
        {
            "author": "alsritter",
            "title": "asymmetric-tiling-comfyui",
            "id": "asymmetric",
            "reference": "https://github.com/alsritter/asymmetric-tiling-comfyui",
            "files": [
                "https://github.com/alsritter/asymmetric-tiling-comfyui"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Asymmetric_Tiling_KSampler. "
        },
        {
            "author": "meap158",
            "title": "GPU temperature protection",
            "id": "gputemp",
            "reference": "https://github.com/meap158/ComfyUI-GPU-temperature-protection",
            "files": [
                "https://github.com/meap158/ComfyUI-GPU-temperature-protection"
            ],
            "install_type": "git-clone",
            "description": "Pause image generation when GPU temperature exceeds threshold."
        },
        {
            "author": "meap158",
            "title": "ComfyUI-Prompt-Expansion",
            "id": "promtp-expansion",
            "reference": "https://github.com/meap158/ComfyUI-Prompt-Expansion",
            "files": [
                "https://github.com/meap158/ComfyUI-Prompt-Expansion"
            ],
            "install_type": "git-clone",
            "description": "Dynamic prompt expansion, powered by GPT-2 locally on your device."
        },
        {
            "author": "meap158",
            "title": "ComfyUI-Background-Replacement",
            "id": "bg-replacement",
            "reference": "https://github.com/meap158/ComfyUI-Background-Replacement",
            "files": [
                "https://github.com/meap158/ComfyUI-Background-Replacement"
            ],
            "install_type": "git-clone",
            "description": "Instantly replace your image's background."
        },
        {
            "author": "TeaCrab",
            "title": "ComfyUI-TeaNodes",
            "id": "teanodes",
            "reference": "https://github.com/TeaCrab/ComfyUI-TeaNodes",
            "files": [
                "https://github.com/TeaCrab/ComfyUI-TeaNodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes:TC_EqualizeCLAHE, TC_SizeApproximation, TC_ImageResize, TC_ImageScale, TC_ColorFill."
        },
        {
            "author": "nagolinc",
            "title": "ComfyUI_FastVAEDecorder_SDXL",
            "reference": "https://github.com/nagolinc/ComfyUI_FastVAEDecorder_SDXL",
            "files": [
                "https://github.com/nagolinc/ComfyUI_FastVAEDecorder_SDXL"
            ],
            "install_type": "git-clone",
            "description": "Based off of: [a/Birch-san/diffusers-play/approx_vae](https://github.com/Birch-san/diffusers-play/tree/main/approx_vae). This ComfyUI node allows you to quickly preview SDXL 1.0 latents."
        },
        {
            "author": "bradsec",
            "title": "ResolutionSelector for ComfyUI",
            "id": "resolution-selector",
            "reference": "https://github.com/bradsec/ComfyUI_ResolutionSelector",
            "files": [
                "https://github.com/bradsec/ComfyUI_ResolutionSelector"
            ],
            "install_type": "git-clone",
            "description": "Nodes:ResolutionSelector"
        },
        {
            "author": "kohya-ss",
            "title": "ControlNet-LLLite-ComfyUI",
            "id": "lllite",
            "reference": "https://github.com/kohya-ss/ControlNet-LLLite-ComfyUI",
            "files": [
                "https://github.com/kohya-ss/ControlNet-LLLite-ComfyUI"
            ],
            "install_type": "git-clone",
            "description": "Nodes: LLLiteLoader"
        },
        {
            "author": "jjkramhoeft",
            "title": "ComfyUI-Jjk-Nodes",
            "id": "jjk",
            "reference": "https://github.com/jjkramhoeft/ComfyUI-Jjk-Nodes",
            "files": [
                "https://github.com/jjkramhoeft/ComfyUI-Jjk-Nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes: SDXLRecommendedImageSize, JjkText, JjkShowText, JjkConcat. A set of custom nodes for ComfyUI - focused on text and parameter utility"
        },
        {
            "author": "dagthomas",
            "title": "SDXL Auto Prompter",
            "id": "autoprompt",
            "reference": "https://github.com/dagthomas/comfyui_dagthomas",
            "files": [
                "https://github.com/dagthomas/comfyui_dagthomas"
            ],
            "install_type": "git-clone",
            "description": "Easy prompting for generation of endless random art pieces and photographs!"
        },
        {
            "author": "marhensa",
            "title": "Recommended Resolution Calculator",
            "id": "resoultion-calc",
            "reference": "https://github.com/marhensa/sdxl-recommended-res-calc",
            "files": [
                "https://github.com/marhensa/sdxl-recommended-res-calc"
            ],
            "install_type": "git-clone",
            "description": "Input your desired output final resolution, it will automaticaly set the initial recommended SDXL ratio/size and its Upscale Factor to reach that output final resolution, also there's an option for 2x/4x reverse Upscale Factor. These all to avoid using bad/arbitary initial ratio/resolution."
        },
        {
            "author": "Nuked",
            "title": "ComfyUI-N-Nodes",
            "id": "nnodes",
            "reference": "https://github.com/Nuked88/ComfyUI-N-Nodes",
            "files": [
                "https://github.com/Nuked88/ComfyUI-N-Nodes"
            ],
            "install_type": "git-clone",
            "description": "A suite of custom nodes for ConfyUI that includes GPT text-prompt generation, LoadVideo,SaveVideo,LoadFramesFromFolder and FrameInterpolator"
        },
        {
            "author": "Nuked",
            "title": "ComfyUI-N-Sidebar",
            "id": "nsidebar",
            "reference": "https://github.com/Nuked88/ComfyUI-N-Sidebar",
            "files": [
                "https://github.com/Nuked88/ComfyUI-N-Sidebar"
            ],
            "install_type": "git-clone",
            "description": "A simple sidebar for ComfyUI."
        },
        {
            "author": "richinsley",
            "title": "Comfy-LFO",
            "id": "lfo",
            "reference": "https://github.com/richinsley/Comfy-LFO",
            "files": [
                "https://github.com/richinsley/Comfy-LFO"
            ],
            "install_type": "git-clone",
            "description": "Nodes:LFO_Triangle, LFO_Sine, SawtoothNode, SquareNode, PulseNode. ComfyUI custom nodes to create Low Frequency Oscillators."
        },
        {
            "author": "Beinsezii",
            "title": "bsz-cui-extras",
            "id": "bsz",
            "reference": "https://github.com/Beinsezii/bsz-cui-extras",
            "files": [
                "https://github.com/Beinsezii/bsz-cui-extras"
            ],
            "install_type": "git-clone",
            "description": "This contains all-in-one 'principled' nodes for T2I, I2I, refining, and scaling. Additionally it has many tools for directly manipulating the color of latents, high res fix math, and scripted image post-processing."
        },
        {
            "author": "youyegit",
            "title": "tdxh_node_comfyui",
            "id": "tdxh",
            "reference": "https://github.com/youyegit/tdxh_node_comfyui",
            "files": [
                "https://github.com/youyegit/tdxh_node_comfyui"
            ],
            "install_type": "git-clone",
            "description": "Nodes:TdxhImageToSize, TdxhImageToSizeAdvanced, TdxhLoraLoader, TdxhIntInput, TdxhFloatInput, TdxhStringInput. Some nodes for stable diffusion comfyui. Sometimes it helps conveniently to use less nodes for doing the same things."
        },
        {
            "author": "Sxela",
            "title": "ComfyWarp",
            "id": "warp",
            "reference": "https://github.com/Sxela/ComfyWarp",
            "files": [
                "https://github.com/Sxela/ComfyWarp"
            ],
            "install_type": "git-clone",
            "description": "Nodes:LoadFrameSequence, LoadFrame"
        },
        {
            "author": "skfoo",
            "title": "ComfyUI-Coziness",
            "id": "coziness",
            "reference": "https://github.com/skfoo/ComfyUI-Coziness",
            "files": [
                "https://github.com/skfoo/ComfyUI-Coziness"
            ],
            "install_type": "git-clone",
            "description": "Nodes:MultiLora Loader, Lora Text Extractor. Provides a node for assisting in loading loras through text."
        },
        {
            "author": "YOUR-WORST-TACO",
            "title": "ComfyUI-TacoNodes",
            "id": "taco",
            "reference": "https://github.com/YOUR-WORST-TACO/ComfyUI-TacoNodes",
            "files": [
                "https://github.com/YOUR-WORST-TACO/ComfyUI-TacoNodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes:TacoLatent, TacoAnimatedLoader, TacoImg2ImgAnimatedLoader, TacoGifMaker."
        },
        {
            "author": "Lerc",
            "title": "Canvas Tab",
            "id": "canvastab",
            "reference": "https://github.com/Lerc/canvas_tab",
            "files": [
                "https://github.com/Lerc/canvas_tab"
            ],
            "install_type": "git-clone",
            "description": "This extension provides a full page image editor with mask support. There are two nodes, one to receive images from the editor and one to send images to the editor."
        },
        {
            "author": "Ttl",
            "title": "ComfyUI Neural Network Latent Upscale",
            "id": "nnlatent",
            "reference": "https://github.com/Ttl/ComfyUi_NNLatentUpscale",
            "files": [
                "https://github.com/Ttl/ComfyUi_NNLatentUpscale"
            ],
            "install_type": "git-clone",
            "preemptions": ["NNLatentUpscale"],
            "description": "Nodes:NNLatentUpscale, A custom ComfyUI node designed for rapid latent upscaling using a compact neural network, eliminating the need for VAE-based decoding and encoding."
        },
        {
            "author": "spro",
            "title": "Latent Mirror node for ComfyUI",
            "id": "latentmirror",
            "reference": "https://github.com/spro/comfyui-mirror",
            "files": [
                "https://github.com/spro/comfyui-mirror"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Latent Mirror. Node to mirror a latent along the Y (vertical / left to right) or X (horizontal / top to bottom) axis."
        },
        {
            "author": "Tropfchen",
            "title": "Embedding Picker",
            "id": "embedding-picker",
            "reference": "https://github.com/Tropfchen/ComfyUI-Embedding_Picker",
            "files": [
                "https://github.com/Tropfchen/ComfyUI-Embedding_Picker"
            ],
            "install_type": "git-clone",
            "description": "Tired of forgetting and misspelling often weird names of embeddings you use? Or perhaps you use only one, cause you forgot you have tens of them installed?"
        },
        {
            "author": "Acly",
            "title": "ComfyUI Nodes for External Tooling",
            "id": "external-tooling",
            "reference": "https://github.com/Acly/comfyui-tooling-nodes",
            "files": [
                "https://github.com/Acly/comfyui-tooling-nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Load Image (Base64), Load Mask (Base64), Send Image (WebSocket), Crop Image, Apply Mask to Image. Provides nodes geared towards using ComfyUI as a backend for external tools.\nNOTE: This extension is necessary when using an external tool like [comfyui-capture-inference](https://github.com/minux302/comfyui-capture-inference)."
        },
        {
            "author": "Acly",
            "title": "ComfyUI Inpaint Nodes",
            "id": "inpaint-nodes",
            "reference": "https://github.com/Acly/comfyui-inpaint-nodes",
            "files": [
                "https://github.com/Acly/comfyui-inpaint-nodes"
            ],
            "install_type": "git-clone",
            "description": "Experimental nodes for better inpainting with ComfyUI. Adds two nodes which allow using [a/Fooocus](https://github.com/Acly/comfyui-inpaint-nodes) inpaint model. It's a small and flexible patch which can be applied to any SDXL checkpoint and will transform it into an inpaint model. This model can then be used like other inpaint models, and provides the same benefits. [a/Read more](https://github.com/lllyasviel/Fooocus/discussions/414)"
        },
        {
            "author": "picturesonpictures",
            "title": "comfy_PoP",
            "id": "pop",
            "reference": "https://github.com/picturesonpictures/comfy_PoP",
            "files": ["https://github.com/picturesonpictures/comfy_PoP"],
            "install_type": "git-clone",
            "description": "A collection of custom nodes for ComfyUI. Includes a quick canny edge detection node with unconventional settings, simple LoRA stack nodes for workflow efficiency, and a customizable aspect ratio node."
        },
        {
            "author": "Dream Project",
            "title": "Dream Project Animation Nodes",
            "id": "dream-anime",
            "reference": "https://github.com/alt-key-project/comfyui-dream-project",
            "files": [
                "https://github.com/alt-key-project/comfyui-dream-project"
            ],
            "install_type": "git-clone",
            "description": "This extension offers various nodes that are useful for Deforum-like animations in ComfyUI."
        },
        {
            "author": "Dream Project",
            "title": "Dream Video Batches",
            "id": "dream-video",
            "reference": "https://github.com/alt-key-project/comfyui-dream-video-batches",
            "files": [
                "https://github.com/alt-key-project/comfyui-dream-video-batches"
            ],
            "install_type": "git-clone",
            "description": "Provide utilities for batch based video generation workflows (s.a. AnimateDiff and Stable Video Diffusion)."
        },
        {
            "author": "seanlynch",
            "title": "ComfyUI Optical Flow",
            "id": "optical-flow",
            "reference": "https://github.com/seanlynch/comfyui-optical-flow",
            "files": [
                "https://github.com/seanlynch/comfyui-optical-flow"
            ],
            "install_type": "git-clone",
            "description": "This package contains three nodes to help you compute optical flow between pairs of images, usually adjacent frames in a video, visualize the flow, and apply the flow to another image of the same dimensions. Most of the code is from Deforum, so this is released under the same license (MIT)."
        },
        {
            "author": "ealkanat",
            "title": "ComfyUI Easy Padding",
            "id": "easy-padding",
            "reference": "https://github.com/ealkanat/comfyui_easy_padding",
            "files": [
                "https://github.com/ealkanat/comfyui_easy_padding"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI Easy Padding is a simple custom ComfyUI node that helps you to add padding to images on ComfyUI."
        },
        {
            "author": "ArtBot2023",
            "title": "Character Face Swap",
            "id": "char-faceswap",
            "reference": "https://github.com/ArtBot2023/CharacterFaceSwap",
            "files": [
                "https://github.com/ArtBot2023/CharacterFaceSwap"
            ],
            "install_type": "git-clone",
            "description": "Character face swap with LoRA and embeddings."
        },
        {
            "author": "mav-rik",
            "title": "Facerestore CF (Code Former)",
            "id": "face-cf",
            "reference": "https://github.com/mav-rik/facerestore_cf",
            "files": [
                "https://github.com/mav-rik/facerestore_cf"
            ],
            "install_type": "git-clone",
            "description": "This is a copy of [a/facerestore custom node](https://civitai.com/models/24690/comfyui-facerestore-node) with a bit of a change to support CodeFormer Fidelity parameter. These ComfyUI nodes can be used to restore faces in images similar to the face restore option in AUTOMATIC1111 webui.\nNOTE: To use this node, you need to download the face restoration model and face detection model from the 'Install models' menu."
        },
        {
            "author": "braintacles",
            "title": "braintacles-nodes",
            "id": "braintacles",
            "reference": "https://github.com/braintacles/braintacles-comfyui-nodes",
            "files": [
                "https://github.com/braintacles/braintacles-comfyui-nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes: CLIPTextEncodeSDXL-Multi-IO, CLIPTextEncodeSDXL-Pipe, Empty Latent Image from Aspect-Ratio, Random Find and Replace."
        },
        {
            "author": "hayden-fr",
            "title": "ComfyUI-Model-Manager",
            "id": "modelmanager",
            "reference": "https://github.com/hayden-fr/ComfyUI-Model-Manager",
            "files": [
                "https://github.com/hayden-fr/ComfyUI-Model-Manager"
            ],
            "install_type": "git-clone",
            "description": "Manage models: browsing, download and delete."
        },
        {
            "author": "hayden-fr",
            "title": "ComfyUI-Image-Browsing",
            "id": "image-browsing",
            "reference": "https://github.com/hayden-fr/ComfyUI-Image-Browsing",
            "files": [
                "https://github.com/hayden-fr/ComfyUI-Image-Browsing"
            ],
            "install_type": "git-clone",
            "description": "Image Browsing: browsing, download and delete."
        },
        {
            "author": "ali1234",
            "title": "comfyui-job-iterator",
            "id": "job-iterator",
            "reference": "https://github.com/ali1234/comfyui-job-iterator",
            "files": [
                "https://github.com/ali1234/comfyui-job-iterator"
            ],
            "install_type": "git-clone",
            "description": "Implements iteration over sequences within a single workflow run. [w/NOTE: This node replaces the execution of ComfyUI for iterative processing functionality.]"
        },
        {
            "author": "jmkl",
            "title": "ComfyUI Ricing",
            "id": "ricing",
            "reference": "https://github.com/jmkl/ComfyUI-ricing",
            "files": [
                "https://github.com/jmkl/ComfyUI-ricing"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI custom user.css and some script stuff. mainly for web interface."
        },
        {
            "author": "budihartono",
            "title": "Otonx's Custom Nodes",
            "id": "otonx",
            "reference": "https://github.com/budihartono/comfyui_otonx_nodes",
            "files": [
                "https://github.com/budihartono/comfyui_otonx_nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes: OTX Multiple Values, OTX KSampler Feeder. This extension provides custom nodes for ComfyUI created for personal projects. Made available for reference. Nodes may be updated or changed intermittently or not at all. Review & test before use."
        },
        {
            "author": "ramyma",
            "title": "A8R8 ComfyUI Nodes",
            "id": "a8r8",
            "reference": "https://github.com/ramyma/A8R8_ComfyUI_nodes",
            "files": [
                "https://github.com/ramyma/A8R8_ComfyUI_nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Base64Image Input Node, Base64Image Output Node. [a/A8R8](https://github.com/ramyma/a8r8) supporting nodes to integrate with ComfyUI"
        },
        {
            "author": "spinagon",
            "title": "Seamless tiling Node for ComfyUI",
            "id": "seamless",
            "reference": "https://github.com/spinagon/ComfyUI-seamless-tiling",
            "files": [
                "https://github.com/spinagon/ComfyUI-seamless-tiling"
            ],
            "install_type": "git-clone",
            "description": "Node for generating almost seamless textures, based on similar setting from A1111."
        },
        {
            "author": "BiffMunky",
            "title": "Endless ️🌊✨ Nodes",
            "id": "endless",
            "reference": "https://github.com/tusharbhutt/Endless-Nodes",
            "files": [
                "https://github.com/tusharbhutt/Endless-Nodes"
            ],
            "install_type": "git-clone",
            "description": "A small set of nodes I created for various numerical and text inputs.  Features image saver with ability to have JSON saved to separate folder, parameter collection nodes, two aesthetic scoring models, switches for text and numbers, and conversion of string to numeric and vice versa."
        },
        {
            "author": "spacepxl",
            "title": "ComfyUI-HQ-Image-Save",
            "id": "hq-image-save",
            "reference": "https://github.com/spacepxl/ComfyUI-HQ-Image-Save",
            "files": [
                "https://github.com/spacepxl/ComfyUI-HQ-Image-Save"
            ],
            "install_type": "git-clone",
            "description": "Add Image Save nodes for TIFF 16 bit and EXR 32 bit formats. Probably only useful if you're applying a LUT or other color corrections, and care about preserving as much color accuracy as possible."
        },
        {
            "author": "spacepxl",
            "title": "ComfyUI-Image-Filters",
            "id": "image-fitlers",
            "reference": "https://github.com/spacepxl/ComfyUI-Image-Filters",
            "files": [
                "https://github.com/spacepxl/ComfyUI-Image-Filters"
            ],
            "install_type": "git-clone",
            "description": "Image and matte filtering nodes for ComfyUI `image/filters/*`"
        },
        {
            "author": "spacepxl",
            "title": "ComfyUI-RAVE",
            "id": "rave",
            "reference": "https://github.com/spacepxl/ComfyUI-RAVE",
            "files": [
                "https://github.com/spacepxl/ComfyUI-RAVE"
            ],
            "install_type": "git-clone",
            "description": "Unofficial ComfyUI implementation of [a/RAVE](https://rave-video.github.io/)"
        },
        {
            "author": "PTA",
            "title": "auto nodes layout",
            "id": "autolayout",
            "reference": "https://github.com/phineas-pta/comfyui-auto-nodes-layout",
            "files": [
                "https://github.com/phineas-pta/comfyui-auto-nodes-layout"
            ],
            "install_type": "git-clone",
            "description": "A ComfyUI extension to apply better nodes layout algorithm to ComfyUI workflow (mostly for visualization purpose)"
        },
        {
            "author": "receyuki",
            "title": "SD Prompt Reader",
            "id": "sdpromptreader",
            "reference": "https://github.com/receyuki/comfyui-prompt-reader-node",
            "files": [
                "https://github.com/receyuki/comfyui-prompt-reader-node"
            ],
            "install_type": "git-clone",
            "description": "The ultimate solution for managing image metadata and multi-tool compatibility. ComfyUI node version of the SD Prompt Reader."
        },
        {
            "author": "rklaffehn",
            "title": "rk-comfy-nodes",
            "id": "rknodes",
            "reference": "https://github.com/rklaffehn/rk-comfy-nodes",
            "files": [
                "https://github.com/rklaffehn/rk-comfy-nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes: RK_CivitAIMetaChecker, RK_CivitAIAddHashes."
        },
        {
            "author": "cubiq",
            "title": "ComfyUI Essentials",
            "id": "essentials",
            "reference": "https://github.com/cubiq/ComfyUI_essentials",
            "files": [
                "https://github.com/cubiq/ComfyUI_essentials"
            ],
            "install_type": "git-clone",
            "description": "Essential nodes that are weirdly missing from ComfyUI core. With few exceptions they are new features and not commodities. I hope this will be just a temporary repository until the nodes get included into ComfyUI."
        },
        {
            "author": "Clybius",
            "title": "ComfyUI-Latent-Modifiers",
            "id": "latent-modifier",
            "reference": "https://github.com/Clybius/ComfyUI-Latent-Modifiers",
            "files": [
                "https://github.com/Clybius/ComfyUI-Latent-Modifiers"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Latent Diffusion Mega Modifier. ComfyUI nodes which modify the latent during the diffusion process. (Sharpness, Tonemap, Rescale, Extra Noise)"
        },
        {
            "author": "Clybius",
            "title": "ComfyUI Extra Samplers",
            "id": "extra-samplers",
            "reference": "https://github.com/Clybius/ComfyUI-Extra-Samplers",
            "files": [
                "https://github.com/Clybius/ComfyUI-Extra-Samplers"
            ],
            "install_type": "git-clone",
            "description": "Nodes: SamplerCustomNoise, SamplerCustomNoiseDuo, SamplerCustomModelMixtureDuo, SamplerRES_Momentumized, SamplerDPMPP_DualSDE_Momentumized, SamplerCLYB_4M_SDE_Momentumized, SamplerTTM, SamplerLCMCustom\nThis extension provides various custom samplers not offered by the default nodes in ComfyUI."
        },
        {
            "author": "mcmonkeyprojects",
            "title": "Stable Diffusion Dynamic Thresholding (CFG Scale Fix)",
            "id": "dynamic-thresholding",
            "reference": "https://github.com/mcmonkeyprojects/sd-dynamic-thresholding",
            "files": [
                "https://github.com/mcmonkeyprojects/sd-dynamic-thresholding"
            ],
            "install_type": "git-clone",
            "description": "Extension for StableSwarmUI, ComfyUI, and AUTOMATIC1111 Stable Diffusion WebUI that enables a way to use higher CFG Scales without color issues. This works by clamping latents between steps."
        },
        {
            "author": "Tropfchen",
            "title": "YARS: Yet Another Resolution Selector",
            "id": "yars",
            "reference": "https://github.com/Tropfchen/ComfyUI-yaResolutionSelector",
            "files": [
                "https://github.com/Tropfchen/ComfyUI-yaResolutionSelector"
            ],
            "install_type": "git-clone",
            "description": "A slightly different Resolution Selector node, allowing to freely change base resolution and aspect ratio, with options to maintain the pixel count or use the base resolution as the highest or lowest dimension."
        },
        {
            "author": "chrisgoringe",
            "title": "Variation seeds",
            "id": "variation-seed",
            "reference": "https://github.com/chrisgoringe/cg-noise",
            "files": [
                "https://github.com/chrisgoringe/cg-noise"
            ],
            "install_type": "git-clone",
            "description": "Adds KSampler custom nodes with variation seed and variation strength."
        },
        {
            "author": "chrisgoringe",
            "title": "Image chooser",
            "id": "image-chooser",
            "reference": "https://github.com/chrisgoringe/cg-image-picker",
            "files": [
                "https://github.com/chrisgoringe/cg-image-picker"
            ],
            "install_type": "git-clone",
            "description": "A custom node that pauses the flow while you choose which image (or latent) to pass on to the rest of the workflow."
        },
        {
            "author": "chrisgoringe",
            "title": "Use Everywhere (UE Nodes)",
            "id": "ue",
            "reference": "https://github.com/chrisgoringe/cg-use-everywhere",
            "files": [
                "https://github.com/chrisgoringe/cg-use-everywhere"
            ],
            "install_type": "git-clone",
            "nodename_pattern": "(^(Prompts|Anything) Everywhere|Simple String)",
            "description": "A set of nodes that allow data to be 'broadcast' to some or all unconnected inputs. Greatly reduces link spaghetti."
        },
        {
            "author": "chrisgoringe",
            "title": "Prompt Info",
            "id": "promptinfo",
            "reference": "https://github.com/chrisgoringe/cg-prompt-info",
            "files": [
                "https://github.com/chrisgoringe/cg-prompt-info"
            ],
            "install_type": "git-clone",
            "description": "Prompt Info"
        },
        {
            "author": "TGu-97",
            "title": "TGu Utilities",
            "id": "tgu",
            "reference": "https://github.com/TGu-97/ComfyUI-TGu-utils",
            "files": [
                "https://github.com/TGu-97/ComfyUI-TGu-utils"
            ],
            "install_type": "git-clone",
            "description": "Nodes: MPN Switch, MPN Reroute, PN Switch. This is a set of custom nodes for ComfyUI. Mainly focus on control switches."
        },
        {
            "author": "seanlynch",
            "title": "SRL's nodes",
            "id": "srl",
            "reference": "https://github.com/seanlynch/srl-nodes",
            "files": [
                "https://github.com/seanlynch/srl-nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes: SRL Conditional Interrupt, SRL Format String, SRL Eval, SRL Filter Image List. This is a collection of nodes I find useful. Note that at least one module allows execution of arbitrary code. Do not use any of these nodes on a system that allow untrusted users to control workflows or inputs.[w/WARNING: The custom nodes in this extension are vulnerable to **security risks** because they allow the execution of arbitrary code through the workflow]"
        },
        {
            "author": "alpertunga-bile",
            "title": "prompt-generator",
            "reference": "https://github.com/alpertunga-bile/prompt-generator-comfyui",
            "files": [
                "https://github.com/alpertunga-bile/prompt-generator-comfyui"
            ],
            "install_type": "git-clone",
            "description": "Custom AI prompt generator node for ComfyUI."
        },
        {
            "author": "kijai",
            "title": "KJNodes for ComfyUI",
            "id": "kjnodes",
            "reference": "https://github.com/kijai/ComfyUI-KJNodes",
            "files": [
                "https://github.com/kijai/ComfyUI-KJNodes"
            ],
            "install_type": "git-clone",
            "description": "Various quality of life -nodes for ComfyUI, mostly just visual stuff to improve usability."
        },
        {
            "author": "kijai",
            "title": "ComfyUI-CCSR",
            "id": "ccsr",
            "reference": "https://github.com/kijai/ComfyUI-CCSR",
            "files": [
                "https://github.com/kijai/ComfyUI-CCSR"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI- CCSR upscaler node"
        },
        {
            "author": "kijai",
            "title": "ComfyUI-SVD",
            "id": "kijai-svd",
            "reference": "https://github.com/kijai/ComfyUI-SVD",
            "files": [
                "https://github.com/kijai/ComfyUI-SVD"
            ],
            "install_type": "git-clone",
            "description": "Preliminary use of SVD in ComfyUI.\nNOTE: Quick Implementation, Unstable. See details on repositories."
        },
        {
            "author": "kijai",
            "title": "Marigold depth estimation in ComfyUI",
            "id": "marigold",
            "reference": "https://github.com/kijai/ComfyUI-Marigold",
            "files": [
                "https://github.com/kijai/ComfyUI-Marigold"
            ],
            "install_type": "git-clone",
            "description": "This is a wrapper node for Marigold depth estimation: [https://github.com/prs-eth/Marigold](https://github.com/kijai/ComfyUI-Marigold). Currently using the same diffusers pipeline as in the original implementation, so in addition to the custom node, you need the model in diffusers format.\nNOTE: See details in repo to install."
        },
        {
            "author": "kijai",
            "title": "Geowizard depth and normal estimation in ComfyUI",
            "id": "geowizard",
            "reference": "https://github.com/kijai/ComfyUI-Geowizard",
            "files": [
                "https://github.com/kijai/ComfyUI-Geowizard"
            ],
            "install_type": "git-clone",
            "description": "This is a diffusers (0.27.2) wrapper node for Geowizard: [https://github.com/fuxiao0719/GeoWizard]. The model is autodownloaded from Hugginface to ComfyUI/models/diffusers/geowizard"
        },
        {
            "author": "kijai",
            "title": "ComfyUI-depth-fm",
            "id": "depth-fm",
            "reference": "https://github.com/kijai/ComfyUI-depth-fm",
            "files": [
                "https://github.com/kijai/ComfyUI-depth-fm"
            ],
            "install_type": "git-clone",
            "description": "Fast and accurate monocular depth estimation."
        },
        {
            "author": "kijai",
            "title": "ComfyUI-DDColor",
            "id": "ddcolor-kijai",
            "reference": "https://github.com/kijai/ComfyUI-DDColor",
            "files": [
                "https://github.com/kijai/ComfyUI-DDColor"
            ],
            "install_type": "git-clone",
            "description": "Node to use [a/DDColor](https://github.com/piddnad/DDColor) in ComfyUI."
        },
        {
            "author": "Kijai",
            "title": "Animatediff MotionLoRA Trainer",
            "id": "motionlora-trainer",
            "reference": "https://github.com/kijai/ComfyUI-ADMotionDirector",
            "files": [
                "https://github.com/kijai/ComfyUI-ADMotionDirector"
            ],
            "install_type": "git-clone",
            "description": "This is a trainer for AnimateDiff MotionLoRAs, based on the implementation of MotionDirector by ExponentialML."
        },
        {
            "author": "kijai",
            "title": "ComfyUI-moondream",
            "id": "moondream",
            "reference": "https://github.com/kijai/ComfyUI-moondream",
            "files": [
                "https://github.com/kijai/ComfyUI-moondream"
            ],
            "install_type": "git-clone",
            "description": "Moondream image to text query node with batch support"
        },
        {
            "author": "kijai",
            "title": "ComfyUI-SUPIR",
            "id": "supir",
            "reference": "https://github.com/kijai/ComfyUI-SUPIR",
            "files": [
                "https://github.com/kijai/ComfyUI-SUPIR"
            ],
            "install_type": "git-clone",
            "description": "Wrapper nodes to use SUPIR upscaling process in ComfyUI"
        },
        {
            "author": "kijai",
            "title": "ComfyUI-DynamiCrafterWrapper",
            "id": "dynamicrafter-kijai",
            "reference": "https://github.com/kijai/ComfyUI-DynamiCrafterWrapper",
            "files": [
                "https://github.com/kijai/ComfyUI-DynamiCrafterWrapper"
            ],
            "install_type": "git-clone",
            "description": "Wrapper nodes to use DynamiCrafter image2video and frame interpolation models in ComfyUI"
        },
        {
            "author": "kijai",
            "title": "ComfyUI-APISR",
            "id": "apisr",
            "reference": "https://github.com/kijai/ComfyUI-APISR-KJ",
            "files": [
                "https://github.com/kijai/ComfyUI-APISR-KJ"
            ],
            "install_type": "git-clone",
            "description": "Node to use [a/APISR](https://github.com/Kiteretsu77/APISR) upscale models in ComfyUI.[w/NOTE: repo name is changed from ComfyUI-APISR -> ComfyUI-APISR-KJ]"
        },
        {
            "author": "kijai",
            "title": "DiffusionLight implementation for ComfyUI",
            "id": "diffusionlight",
            "reference": "https://github.com/kijai/ComfyUI-DiffusionLight",
            "files": [
                "https://github.com/kijai/ComfyUI-DiffusionLight"
            ],
            "install_type": "git-clone",
            "description": "This is simplified implementation of the [a/DiffusionLight](https://github.com/DiffusionLight/DiffusionLight) method of creating light probes. You will need the included LoRA, place it in ComfyUI/loras folder like usual, it's converted from the original diffusers one."
        },
        {
            "author": "kijai",
            "title": "ComfyUI-ELLA-wrapper",
            "reference": "https://github.com/kijai/ComfyUI-ELLA-wrapper",
            "files": [
                "https://github.com/kijai/ComfyUI-ELLA-wrapper"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI wrapper nodes to use the Diffusers implementation of ELLA"
        },
        {
            "author": "kijai",
            "title": "ComfyUI-LaVi-Bridge-Wrapper",
            "reference": "https://github.com/kijai/ComfyUI-LaVi-Bridge-Wrapper",
            "files": [
                "https://github.com/kijai/ComfyUI-LaVi-Bridge-Wrapper"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI wrapper node to test LaVi-Bridge using Diffusers"
        },
        {
            "author": "kijai",
            "title": "ComfyUI-BrushNet-Wrapper",
            "reference": "https://github.com/kijai/ComfyUI-BrushNet-Wrapper",
            "files": [
                "https://github.com/kijai/ComfyUI-BrushNet-Wrapper"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI wrapper nodes to use the Diffusers implementation of BrushNet"
        },
        {
            "author": "kijai",
            "title": "ComfyUI-IC-Light",
            "id": "ic-light-kijai",
            "reference": "https://github.com/kijai/ComfyUI-IC-Light",
            "files": [
                "https://github.com/kijai/ComfyUI-IC-Light"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI native nodes for IC-Light"
        },
        {
            "author": "hhhzzyang",
            "title": "Comfyui-Lama",
            "id": "lama",
            "reference": "https://github.com/hhhzzyang/Comfyui_Lama",
            "files": [
                "https://github.com/hhhzzyang/Comfyui_Lama"
            ],
            "install_type": "git-clone",
            "description": "Nodes: LamaaModelLoad, LamaApply, YamlConfigLoader. a costumer node is realized to remove anything/inpainting anything from a picture by mask inpainting.[w/WARN:This extension includes the entire model, which can result in a very long initial installation time, and there may be some compatibility issues with older dependencies and ComfyUI.]"
        },
        {
            "author": "audioscavenger",
            "title": "Save Image Extended for ComfyUI",
            "id": "save-image-extended",
            "reference": "https://github.com/audioscavenger/save-image-extended-comfyui",
            "files": [
                "https://github.com/audioscavenger/save-image-extended-comfyui"
            ],
            "install_type": "git-clone",
            "description": "Upgrade the Save File node: customize subfolders, file names with checkpoint names, or any sampler attribute your want! [w/NOTE: This node is a fork from @thedyze, since the [a/original repository](https://github.com/thedyze/save-image-extended-comfyui) is no longer maintained. Simply *uninstall* the original version and **REINSTALL** this one.]"
        },
        {
            "author": "SOELexicon",
            "title": "ComfyUI-LexTools",
            "id": "lextools",
            "reference": "https://github.com/SOELexicon/ComfyUI-LexTools",
            "files": [
                "https://github.com/SOELexicon/ComfyUI-LexTools"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI-LexTools is a Python-based image processing and analysis toolkit that uses machine learning models for semantic image segmentation, image scoring, and image captioning."
        },
        {
            "author": "mikkel",
            "title": "ComfyUI - Text Overlay Plugin",
            "id": "textoverlay",
            "reference": "https://github.com/mikkel/ComfyUI-text-overlay",
            "files": [
                "https://github.com/mikkel/ComfyUI-text-overlay"
            ],
            "install_type": "git-clone",
            "description": "The ComfyUI Text Overlay Plugin provides functionalities for superimposing text on images. Users can select different font types, set text size, choose color, and adjust the text's position on the image."
        },
        {
            "author": "avatechai",
            "title": "Avatar Graph",
            "id": "avatar",
            "reference": "https://github.com/avatechai/avatar-graph-comfyui",
            "files": [
                "https://github.com/avatechai/avatar-graph-comfyui"
            ],
            "install_type": "git-clone",
            "description": "Include nodes for sam + bpy operation, that allows workflow creations for generative 2d character rig."
        },
        {
            "author": "TRI3D-LC",
            "title": "tri3d-comfyui-nodes",
            "id": "tri3d",
            "reference": "https://github.com/TRI3D-LC/tri3d-comfyui-nodes",
            "files": [
                "https://github.com/TRI3D-LC/tri3d-comfyui-nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes: tri3d-extract-hand, tri3d-fuzzification, tri3d-position-hands, tri3d-atr-parse."
        },
        {
            "author": "storyicon",
            "title": "segment anything",
            "id": "sam",
            "reference": "https://github.com/storyicon/comfyui_segment_anything",
            "files": [
                "https://github.com/storyicon/comfyui_segment_anything"
            ],
            "install_type": "git-clone",
            "description": "Based on GroundingDino and SAM, use semantic strings to segment any element in an image. The comfyui version of sd-webui-segment-anything."
        },
        {
            "author": "storyicon",
            "title": "ComfyUI MuseV Evolved",
            "id": "musev-evolved",
            "reference": "https://github.com/storyicon/comfyui_musev_evolved",
            "files": [
                "https://github.com/storyicon/comfyui_musev_evolved"
            ],
            "install_type": "git-clone",
            "description": "Nodes:MuseVImg2Vid (comfyui_musev_evolved)\nNOTE: Download [a/MuseV](https://huggingface.co/TMElyralab/MuseV) to ComfyUI/models/diffusers"
        },
        {
            "author": "a1lazydog",
            "title": "ComfyUI-AudioScheduler",
            "id": "audioscheduler",
            "reference": "https://github.com/a1lazydog/ComfyUI-AudioScheduler",
            "files": [
                "https://github.com/a1lazydog/ComfyUI-AudioScheduler"
            ],
            "install_type": "git-clone",
            "description": "Load mp3 files and use the audio nodes to power animations and prompt scheduling. Use with FizzNodes."
        },
        {
            "author": "whatbirdisthat",
            "title": "cyberdolphin",
            "reference": "https://github.com/whatbirdisthat/cyberdolphin",
            "files": [
                "https://github.com/whatbirdisthat/cyberdolphin"
            ],
            "install_type": "git-clone",
            "description": "Cyberdolphin Suite of ComfyUI nodes for wiring up things."
        },
        {
            "author": "chrish-slingshot",
            "title": "CrasH Utils",
            "id": "crash",
            "reference": "https://github.com/chrish-slingshot/CrasHUtils",
            "files": [
                "https://github.com/chrish-slingshot/CrasHUtils"
            ],
            "install_type": "git-clone",
            "description": "A mixture of effects and quality of life nodes. Nodes: ImageGlitcher (gives an image a cool glitchy effect), ColorStylizer (highlights a single color in an image), QueryLocalLLM (queries a local LLM API though oobabooga), SDXLReslution (resolution picker for the standard SDXL resolutions, the complete list), SDXLResolutionSplit (splits the SDXL resolution into width and height). "
        },
        {
            "author": "spinagon",
            "title": "ComfyUI-seam-carving",
            "id": "seamcarving",
            "reference": "https://github.com/spinagon/ComfyUI-seam-carving",
            "files": [
                "https://github.com/spinagon/ComfyUI-seam-carving"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Image Resize (seam carving). Seam carving (image resize) for ComfyUI. Based on [a/https://github.com/li-plus/seam-carving](https://github.com/li-plus/seam-carving). With seam carving algorithm, the image could be intelligently resized while keeping the important contents undistorted. The carving process could be further guided, so that an object could be removed from the image without apparent artifacts."
        },
        {
            "author": "YMC",
            "title": "ymc-node-suite-comfyui",
            "id": "ymc",
            "reference": "https://github.com/YMC-GitHub/ymc-node-suite-comfyui",
            "files": [
                "https://github.com/YMC-GitHub/ymc-node-suite-comfyui"
            ],
            "install_type": "git-clone",
            "description": "ymc 's nodes for comfyui. This extension is composed of nodes that provide various utility features such as text, region, and I/O."
        },
        {
            "author": "chibiace",
            "title": "ComfyUI-Chibi-Nodes",
            "id": "chibi",
            "reference": "https://github.com/chibiace/ComfyUI-Chibi-Nodes",
            "files": [
                "https://github.com/chibiace/ComfyUI-Chibi-Nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Loader, Prompts, ImageTool, Wildcards, LoadEmbedding, ConditionText, SaveImages, ..."
        },
        {
            "author": "DigitalIO",
            "title": "ComfyUI-stable-wildcards",
            "id": "stable-wildcards",
            "reference": "https://github.com/DigitalIO/ComfyUI-stable-wildcards",
            "files": [
                "https://github.com/DigitalIO/ComfyUI-stable-wildcards"
            ],
            "install_type": "git-clone",
            "description": "Wildcard implementation that can be reproduced with workflows."
        },
        {
            "author": "THtianhao",
            "title": "ComfyUI-Portrait-Maker",
            "id": "portrait-maker",
            "reference": "https://github.com/THtianhao/ComfyUI-Portrait-Maker",
            "files": [
                "https://github.com/THtianhao/ComfyUI-Portrait-Maker"
            ],
            "install_type": "git-clone",
            "description": "Nodes:RetainFace, FaceFusion, RatioMerge2Image, MaskMerge2Image, ReplaceBoxImg, ExpandMaskBox, FaceSkin, SkinRetouching, PortraitEnhancement, ..."
        },
        {
            "author": "THtianhao",
            "title": "ComfyUI-FaceChain",
            "id": "facechain",
            "reference": "https://github.com/THtianhao/ComfyUI-FaceChain",
            "files": [
                "https://github.com/THtianhao/ComfyUI-FaceChain"
            ],
            "install_type": "git-clone",
            "description": "The official ComfyUI version of facechain greatly improves the speed of reasoning and has great custom process controls."
        },
        {
            "author": "zer0TF",
            "title": "Cute Comfy",
            "id": "cutecomfy",
            "reference": "https://github.com/zer0TF/cute-comfy",
            "files": [
                "https://github.com/zer0TF/cute-comfy"
            ],
            "install_type": "git-clone",
            "description": "Adds a configurable folder watcher that auto-converts Comfy metadata into a Civitai-friendly format for automatic resource tagging when you upload images. Oh, and it makes your UI awesome, too. 💜"
        },
        {
            "author": "chflame163",
            "title": "ComfyUI_MSSpeech_TTS",
            "id": "msspeech",
            "reference": "https://github.com/chflame163/ComfyUI_MSSpeech_TTS",
            "files": [
                "https://github.com/chflame163/ComfyUI_MSSpeech_TTS"
            ],
            "install_type": "git-clone",
            "description": "A text-to-speech plugin used under ComfyUI. It utilizes the Microsoft Speech TTS interface to convert text content into MP3 format audio files."
        },
        {
            "author": "chflame163",
            "title": "ComfyUI_WordCloud",
            "id": "wordcloud",
            "reference": "https://github.com/chflame163/ComfyUI_WordCloud",
            "files": [
                "https://github.com/chflame163/ComfyUI_WordCloud"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Word Cloud, Load Text File"
        },
        {
            "author": "chflame163",
            "title": "ComfyUI Layer Style",
            "id": "layerstyle",
            "reference": "https://github.com/chflame163/ComfyUI_LayerStyle",
            "files": [
                "https://github.com/chflame163/ComfyUI_LayerStyle"
            ],
            "install_type": "git-clone",
            "description": "A set of nodes for ComfyUI it generate image like Adobe Photoshop's Layer Style. the Drop Shadow is first completed node, and follow-up work is in progress."
        },
        {
            "author": "chflame163",
            "title": "ComfyUI Face Similarity",
            "id": "face-similarity",
            "reference": "https://github.com/chflame163/ComfyUI_FaceSimilarity",
            "files": [
                "https://github.com/chflame163/ComfyUI_FaceSimilarity"
            ],
            "install_type": "git-clone",
            "description": "A custom node for ComfyUI. It compare two images to rate facial similarity."
        },
        {
            "author": "drustan-hawk",
            "title": "primitive-types",
            "reference": "https://github.com/drustan-hawk/primitive-types",
            "files": [
                "https://github.com/drustan-hawk/primitive-types"
            ],
            "install_type": "git-clone",
            "description": "This repository contains typed primitives for ComfyUI. The motivation for these primitives is that the standard primitive node cannot be routed."
        },
        {
            "author": "shadowcz007",
            "title": "comfyui-mixlab-nodes",
            "id": "mixlab",
            "reference": "https://github.com/shadowcz007/comfyui-mixlab-nodes",
            "files": [
                "https://github.com/shadowcz007/comfyui-mixlab-nodes"
            ],
            "install_type": "git-clone",
            "description": "3D, ScreenShareNode & FloatingVideoNode, SpeechRecognition & SpeechSynthesis, GPT, LoadImagesFromLocal, Layers, Other Nodes, ..."
        },
        {
            "author": "shadowcz007",
            "title": "comfyui-ultralytics-yolo",
            "id": "yolo",
            "reference": "https://github.com/shadowcz007/comfyui-ultralytics-yolo",
            "files": [
                "https://github.com/shadowcz007/comfyui-ultralytics-yolo"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Detect By Label."
        },
        {
            "author": "shadowcz007",
            "title": "Consistency Decoder",
            "id": "consistency-decoder",
            "reference": "https://github.com/shadowcz007/comfyui-consistency-decoder",
            "files": [
                "https://github.com/shadowcz007/comfyui-consistency-decoder"
            ],
            "install_type": "git-clone",
            "description": "[a/openai Consistency Decoder](https://github.com/openai/consistencydecoder). After downloading the [a/OpenAI VAE model](https://openaipublic.azureedge.net/diff-vae/c9cebd3132dd9c42936d803e33424145a748843c8f716c0814838bdc8a2fe7cb/decoder.pt), place it in the `model/vae` directory for use."
        },
        {
            "author": "shadowcz007",
            "title": "comfyui-Image-reward",
            "reference": "https://github.com/shadowcz007/comfyui-Image-reward",
            "files": [
                "https://github.com/shadowcz007/comfyui-Image-reward"
            ],
            "install_type": "git-clone",
            "description": "[a/ImageReward](https://github.com/THUDM/ImageReward): Human preference learning in text-to-image generation. This is a [a/paper](https://arxiv.org/abs/2304.05977) from NeurIPS 2023"
        },
        {
            "author": "ostris",
            "title": "Ostris Nodes ComfyUI",
            "id": "ostris",
            "reference": "https://github.com/ostris/ostris_nodes_comfyui",
            "files": [
                "https://github.com/ostris/ostris_nodes_comfyui"
            ],
            "install_type": "git-clone",
            "nodename_pattern": "- Ostris$",
            "description": "This is a collection of custom nodes for ComfyUI that I made for some QOL. I will be adding much more advanced ones in the future once I get more familiar with the API."
        },
        {
            "author": "0xbitches",
            "title": "Latent Consistency Model for ComfyUI",
            "id": "lcm",
            "reference": "https://github.com/0xbitches/ComfyUI-LCM",
            "files": [
                "https://github.com/0xbitches/ComfyUI-LCM"
            ],
            "install_type": "git-clone",
            "description": "This custom node implements a Latent Consistency Model sampler in ComfyUI. (LCM)"
        },
        {
            "author": "aszc-dev",
            "title": "Core ML Suite for ComfyUI",
            "id": "coreml",
            "reference": "https://github.com/aszc-dev/ComfyUI-CoreMLSuite",
            "files": [
                "https://github.com/aszc-dev/ComfyUI-CoreMLSuite"
            ],
            "install_type": "git-clone",
            "description": "This extension contains a set of custom nodes for ComfyUI that allow you to use Core ML models in your ComfyUI workflows. The models can be obtained here, or you can convert your own models using coremltools. The main motivation behind using Core ML models in ComfyUI is to allow you to utilize the ANE (Apple Neural Engine) on Apple Silicon (M1/M2) machines to improve performance."
        },
        {
            "author": "taabata",
            "title": "Syrian Falcon Nodes",
            "id": "syrian",
            "reference": "https://github.com/taabata/Comfy_Syrian_Falcon_Nodes",
            "files": [
                "https://github.com/taabata/Comfy_Syrian_Falcon_Nodes/raw/main/SyrianFalconNodes.py"
            ],
            "install_type": "copy",
            "description": "Nodes:Prompt editing, Word as Image"
        },
        {
            "author": "taabata",
            "title": "LCM_Inpaint-Outpaint_Comfy",
            "id": "lcm-inpaint-outpaint",
            "reference": "https://github.com/taabata/LCM_Inpaint-Outpaint_Comfy",
            "files": [
                "https://github.com/taabata/LCM_Inpaint-Outpaint_Comfy"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI custom nodes for inpainting/outpainting using the new latent consistency model (LCM)"
        },
        {
            "author": "noxinias",
            "title": "ComfyUI_NoxinNodes",
            "id": "noxin",
            "reference": "https://github.com/noxinias/ComfyUI_NoxinNodes",
            "files": [
                "https://github.com/noxinias/ComfyUI_NoxinNodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Noxin Complete Chime, Noxin Scaled Resolutions, Load from Noxin Prompt Library, Save to Noxin Prompt Library"
        },
        {
            "author": "apesplat",
            "title": "ezXY scripts and nodes",
            "id": "ezxy",
            "reference": "https://github.com/GMapeSplat/ComfyUI_ezXY",
            "files": [
                "https://github.com/GMapeSplat/ComfyUI_ezXY"
            ],
            "install_type": "git-clone",
            "description": "Extensions/Patches: Enables linking float and integer inputs and ouputs. Values are automatically cast to the correct type and clamped to the correct range. Works with both builtin and custom nodes.[w/NOTE: This repo patches ComfyUI's validate_inputs and map_node_over_list functions while running. May break depending on your version of ComfyUI. Can be deactivated in config.yaml.]Nodes: A collection of nodes for facilitating the generation of XY plots. Capable of plotting changes over most primitive values."
        },
        {
            "author": "kinfolk0117",
            "title": "SimpleTiles",
            "id": "simpletiles",
            "reference": "https://github.com/kinfolk0117/ComfyUI_SimpleTiles",
            "files": [
                "https://github.com/kinfolk0117/ComfyUI_SimpleTiles"
            ],
            "install_type": "git-clone",
            "description": "Nodes:TileSplit, TileMerge."
        },
        {
            "author": "kinfolk0117",
            "title": "ComfyUI_GradientDeepShrink",
            "id": "deepshrink",
            "reference": "https://github.com/kinfolk0117/ComfyUI_GradientDeepShrink",
            "files": [
                "https://github.com/kinfolk0117/ComfyUI_GradientDeepShrink"
            ],
            "install_type": "git-clone",
            "description": "Nodes:GradientPatchModelAddDownscale (Kohya Deep Shrink)."
        },
        {
            "author": "kinfolk0117",
            "title": "ComfyUI_Pilgram",
            "id": "pilgram",
            "reference": "https://github.com/kinfolk0117/ComfyUI_Pilgram",
            "files": [
                "https://github.com/kinfolk0117/ComfyUI_Pilgram"
            ],
            "install_type": "git-clone",
            "description": "Use [a/Pilgram2](https://github.com/mgineer85/pilgram2) filters in ComfyUI"
        },
        {
            "author": "Fictiverse",
            "title": "ComfyUI Fictiverse Nodes",
            "id": "fictverse",
            "reference": "https://github.com/Fictiverse/ComfyUI_Fictiverse",
            "files": [
                "https://github.com/Fictiverse/ComfyUI_Fictiverse"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Color correction."
        },
        {
            "author": "idrirap",
            "title": "ComfyUI-Lora-Auto-Trigger-Words",
            "id": "lora-auto-trigger",
            "reference": "https://github.com/idrirap/ComfyUI-Lora-Auto-Trigger-Words",
            "files": [
                "https://github.com/idrirap/ComfyUI-Lora-Auto-Trigger-Words"
            ],
            "install_type": "git-clone",
            "description": "This project is a fork of [a/https://github.com/Extraltodeus/LoadLoraWithTags](https://github.com/Extraltodeus/LoadLoraWithTags) The aim of these custom nodes is to get an easy access to the tags used to trigger a lora."
        },
        {
            "author": "aianimation55",
            "title": "Comfy UI FatLabels",
            "id": "fatlab",
            "reference": "https://github.com/aianimation55/ComfyUI-FatLabels",
            "files": [
                "https://github.com/aianimation55/ComfyUI-FatLabels"
            ],
            "install_type": "git-clone",
            "description": "It's a super simple custom node for Comfy UI, to generate text, with a font size option. Useful for bigger labelling of nodes, helpful for wider screen captures or tutorials. Plus you can of course use the text within your generations."
        },
        {
            "author": "noEmbryo",
            "title": "noEmbryo nodes",
            "id": "noembryo",
            "reference": "https://github.com/noembryo/ComfyUI-noEmbryo",
            "files": [
                "https://github.com/noembryo/ComfyUI-noEmbryo"
            ],
            "install_type": "git-clone",
            "description": "PromptTermList (1-6): are some nodes that help with the creation of Prompts inside ComfyUI. Resolution Scale outputs image dimensions using a scale factor. Regex Text Chopper outputs the chopped parts of a text using RegEx."
        },
        {
            "author": "mikkel",
            "title": "ComfyUI - Mask Bounding Box",
            "id": "mask-bbox",
            "reference": "https://github.com/mikkel/comfyui-mask-boundingbox",
            "files": [
                "https://github.com/mikkel/comfyui-mask-boundingbox"
            ],
            "install_type": "git-clone",
            "description": "The ComfyUI Mask Bounding Box Plugin provides functionalities for selecting a specific size mask from an image. Can be combined with ClipSEG to replace any aspect of an SDXL image with an SD1.5 output."
        },
        {
            "author": "ParmanBabra",
            "title": "ComfyUI-Malefish-Custom-Scripts",
            "id": "malefish",
            "reference": "https://github.com/ParmanBabra/ComfyUI-Malefish-Custom-Scripts",
            "files": [
                "https://github.com/ParmanBabra/ComfyUI-Malefish-Custom-Scripts"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Multi Lora Loader, Random (Prompt), Combine (Prompt), CSV Prompts Loader"
        },
        {
            "author": "IAmMatan.com",
            "title": "ComfyUI Serving toolkit",
            "id": "serving-toolkit",
            "reference": "https://github.com/matan1905/ComfyUI-Serving-Toolkit",
            "files": [
                "https://github.com/matan1905/ComfyUI-Serving-Toolkit"
            ],
            "install_type": "git-clone",
            "description": "This extension adds nodes that allow you to easily serve your workflow (for example using a discord bot) "
        },
        {
            "author": "PCMonsterx",
            "title": "ComfyUI-CSV-Loader",
            "id": "csv-loader",
            "reference": "https://github.com/PCMonsterx/ComfyUI-CSV-Loader",
            "files": [
                "https://github.com/PCMonsterx/ComfyUI-CSV-Loader"
            ],
            "install_type": "git-clone",
            "description": "CSV Loader for prompt building within ComfyUI interface. Allows access to positive/negative prompts associated with a name. Selections are being pulled from CSV files."
        },
        {
            "author": "Trung0246",
            "title": "ComfyUI-0246",
            "id": "0246",
            "reference": "https://github.com/Trung0246/ComfyUI-0246",
            "files": [
                "https://github.com/Trung0246/ComfyUI-0246"
            ],
            "install_type": "git-clone",
            "description": "Random nodes for ComfyUI I made to solve my struggle with ComfyUI (ex: pipe, process). Have varying quality."
        },
        {
            "author": "fexli",
            "title": "fexli-util-node-comfyui",
            "id": "fexli",
            "reference": "https://github.com/fexli/fexli-util-node-comfyui",
            "files": [
                "https://github.com/fexli/fexli-util-node-comfyui"
            ],
            "install_type": "git-clone",
            "description": "Nodes:FEImagePadForOutpaint, FEColorOut, FEColor2Image, FERandomizedColor2Image"
        },
        {
            "author": "AbyssYuan0",
            "title": "ComfyUI_BadgerTools",
            "id": "badger",
            "reference": "https://github.com/AbyssYuan0/ComfyUI_BadgerTools",
            "files": [
                "https://github.com/AbyssYuan0/ComfyUI_BadgerTools"
            ],
            "install_type": "git-clone",
            "description": "Nodes:ImageOverlap-badger, FloatToInt-badger, IntToString-badger, FloatToString-badger, ImageNormalization-badger, ImageScaleToSide-badger, NovelToFizz-badger."
        },
        {
            "author": "palant",
            "title": "Image Resize for ComfyUI",
            "id": "image-resize",
            "reference": "https://github.com/palant/image-resize-comfyui",
            "files": [
                "https://github.com/palant/image-resize-comfyui"
            ],
            "install_type": "git-clone",
            "description": "This custom node provides various tools for resizing images. The goal is resizing without distorting proportions, yet without having to perform any calculations with the size of the original image. If a mask is present, it is resized and modified along with the image."
        },
        {
            "author": "palant",
            "title": "Integrated Nodes for ComfyUI",
            "reference": "https://github.com/palant/integrated-nodes-comfyui",
            "files": [
                "https://github.com/palant/integrated-nodes-comfyui"
            ],
            "install_type": "git-clone",
            "description": "This tool will turn entire workflows or parts of them into single integrated nodes. In a way, it is similar to the Node Templates functionality but hides the inner structure. This is useful if all you want is to reuse and quickly configure a bunch of nodes without caring how they are interconnected."
        },
        {
            "author": "palant",
            "title": "Extended Save Image for ComfyUI",
            "reference": "https://github.com/palant/extended-saveimage-comfyui",
            "files": [
                "https://github.com/palant/extended-saveimage-comfyui"
            ],
            "install_type": "git-clone",
            "description": "This custom node is largely identical to the usual Save Image but allows saving images also in JPEG and WEBP formats, the latter with both lossless and lossy compression. Metadata is embedded in the images as usual, and the resulting images can be used to load a workflow."
        },
        {
            "author": "whmc76",
            "title": "ComfyUI-Openpose-Editor-Plus",
            "id": "openpose-editor-plus",
            "reference": "https://github.com/whmc76/ComfyUI-Openpose-Editor-Plus",
            "files": [
                "https://github.com/whmc76/ComfyUI-Openpose-Editor-Plus"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Openpose Editor Plus"
        },
        {
            "author": "martijnat",
            "title": "comfyui-previewlatent",
            "reference": "https://github.com/martijnat/comfyui-previewlatent",
            "files": [
                "https://github.com/martijnat/comfyui-previewlatent"
            ],
            "install_type": "git-clone",
            "description": "a ComfyUI plugin for previewing latents without vae decoding. Useful for showing intermediate results and can be used a faster 'preview image' if you don't wan't to use vae decode."
        },
        {
            "author": "banodoco",
            "title": "Steerable Motion",
            "id": "steerable-motion",
            "reference": "https://github.com/banodoco/steerable-motion",
            "files": [
                "https://github.com/banodoco/steerable-motion"
            ],
            "install_type": "git-clone",
            "description": "Steerable Motion is a ComfyUI node for batch creative interpolation. Our goal is to feature the best methods for steering motion with images as video models evolve."
        },
        {
            "author": "gemell1",
            "title": "ComfyUI_GMIC",
            "id": "gmic",
            "reference": "https://github.com/gemell1/ComfyUI_GMIC",
            "files": [
                "https://github.com/gemell1/ComfyUI_GMIC"
            ],
            "install_type": "git-clone",
            "description": "Nodes:GMIC Image Processing."
        },
        {
            "author": "LonicaMewinsky",
            "title": "ComfyBreakAnim",
            "id": "breakanim",
            "reference": "https://github.com/LonicaMewinsky/ComfyUI-MakeFrame",
            "files": [
                "https://github.com/LonicaMewinsky/ComfyUI-MakeFrame"
            ],
            "install_type": "git-clone",
            "description": "Nodes:BreakFrames, GetKeyFrames, MakeGrid."
        },
        {
            "author": "TheBarret",
            "title": "ZSuite",
            "id": "zsuite",
            "reference": "https://github.com/TheBarret/ZSuite",
            "files": [
                "https://github.com/TheBarret/ZSuite"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Prompter, RF Noise, SeedMod."
        },
        {
            "author": "romeobuilderotti",
            "title": "ComfyUI PNG Metadata",
            "id": "pngmeta",
            "reference": "https://github.com/romeobuilderotti/ComfyUI-PNG-Metadata",
            "files": [
                "https://github.com/romeobuilderotti/ComfyUI-PNG-Metadata"
            ],
            "install_type": "git-clone",
            "description": "Add custom Metadata fields to your saved PNG files."
        },
        {
            "author": "ka-puna",
            "title": "comfyui-yanc",
            "id": "yanc",
            "reference": "https://github.com/ka-puna/comfyui-yanc",
            "files": [
                "https://github.com/ka-puna/comfyui-yanc"
            ],
            "install_type": "git-clone",
            "description": "NOTE: Concatenate Strings, Format Datetime String, Integer Caster, Multiline String, Truncate String. Yet Another Node Collection, a repository of simple nodes for ComfyUI. This repository eases the addition or removal of custom nodes to itself."
        },
        {
            "author": "amorano",
            "title": "Jovimetrix Composition Nodes",
            "id": "jovimetrix",
            "reference": "https://github.com/Amorano/Jovimetrix",
            "files": [
                "https://github.com/Amorano/Jovimetrix"
            ],
            "nodename_pattern": " \\(jov\\)$",
            "install_type": "git-clone",
            "description": "Compose like Substance Designer. Webcams, Media Streams (in/out), Tick animation, Color correction, Geometry manipulation, Pixel shader, Polygonal shape generator, Remap images gometry and color, Heavily inspired by WAS and MTB Node Suites."
        },
        {
            "author": "Umikaze-job",
            "title": "select_folder_path_easy",
            "reference": "https://github.com/Umikaze-job/select_folder_path_easy",
            "files": [
                "https://github.com/Umikaze-job/select_folder_path_easy"
            ],
            "install_type": "git-clone",
            "description": "This extension simply connects the nodes and specifies the output path of the generated images to a manageable path."
        },
        {
            "author": "Niutonian",
            "title": "ComfyUi-NoodleWebcam",
            "id": "noodle-webcam",
            "reference": "https://github.com/Niutonian/ComfyUi-NoodleWebcam",
            "files": [
                "https://github.com/Niutonian/ComfyUi-NoodleWebcam"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Noodle webcam is a node that records frames and send them to your favourite node."
        },
        {
            "author": "Feidorian",
            "title": "feidorian-ComfyNodes",
            "id": "feidorian",
            "reference": "https://github.com/Feidorian/feidorian-ComfyNodes",
            "nodename_pattern": "^Feidorian_",
            "files": [
                "https://github.com/Feidorian/feidorian-ComfyNodes"
            ],
            "install_type": "git-clone",
            "description": "This extension provides various custom nodes. literals, loaders, logic, output, switches"
        },
        {
            "author": "wutipong",
            "title": "ComfyUI-TextUtils",
            "reference": "https://github.com/wutipong/ComfyUI-TextUtils",
            "files": [
                "https://github.com/wutipong/ComfyUI-TextUtils"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Create N-Token String"
        },
        {
            "author": "natto-maki",
            "title": "ComfyUI-NegiTools",
            "id": "negitools",
            "reference": "https://github.com/natto-maki/ComfyUI-NegiTools",
            "files": [
                "https://github.com/natto-maki/ComfyUI-NegiTools"
            ],
            "install_type": "git-clone",
            "description": "Nodes:OpenAI DALLe3, OpenAI Translate to English, String Function, Seed Generator"
        },
        {
            "author": "LonicaMewinsky",
            "title": "ComfyUI-RawSaver",
            "id": "rawsaver",
            "reference": "https://github.com/LonicaMewinsky/ComfyUI-RawSaver",
            "files": [
                "https://github.com/LonicaMewinsky/ComfyUI-RawSaver"
            ],
            "install_type": "git-clone",
            "description": "Nodes:SaveTifImage. ComfyUI custom node for purpose of saving image as uint16 tif file."
        },
        {
            "author": "jojkaart",
            "title": "ComfyUI-sampler-lcm-alternative",
            "id": "lmc-alt",
            "reference": "https://github.com/jojkaart/ComfyUI-sampler-lcm-alternative",
            "files": [
                "https://github.com/jojkaart/ComfyUI-sampler-lcm-alternative"
            ],
            "install_type": "git-clone",
            "description": "Nodes:LCMScheduler, SamplerLCMAlternative, SamplerLCMCycle. ComfyUI Custom Sampler nodes that add a new improved LCM sampler functions"
        },
        {
            "author": "GTSuya-Studio",
            "title": "ComfyUI-GTSuya-Nodes",
            "id": "gtsuya",
            "reference": "https://github.com/GTSuya-Studio/ComfyUI-Gtsuya-Nodes",
            "files": [
                "https://github.com/GTSuya-Studio/ComfyUI-Gtsuya-Nodes"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI-GTSuya-Nodes is a ComfyUI extension designed to add several wildcards supports into ComfyUI. Wildcards allow you to use __name__ syntax in your prompt to get a random line from a file named name.txt in a wildcards directory."
        },
        {
            "author": "oyvindg",
            "title": "ComfyUI-TrollSuite",
            "id": "troll",
            "reference": "https://github.com/oyvindg/ComfyUI-TrollSuite",
            "files": [
                "https://github.com/oyvindg/ComfyUI-TrollSuite"
            ],
            "install_type": "git-clone",
            "description": "Nodes: BinaryImageMask, ImagePadding, LoadLastCreatedImage, RandomMask, TransparentImage."
        },
        {
            "author": "drago87",
            "title": "ComfyUI_Dragos_Nodes",
            "id": "dragos",
            "reference": "https://github.com/drago87/ComfyUI_Dragos_Nodes",
            "files": [
                "https://github.com/drago87/ComfyUI_Dragos_Nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes:File Padding, Image Info, VAE Loader With Name"
        },
        {
            "author": "ansonkao",
            "title": "comfyui-geometry",
            "id": "geometry",
            "reference": "https://github.com/ansonkao/comfyui-geometry",
            "files": [
                "https://github.com/ansonkao/comfyui-geometry"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Mask to Centroid, Mask to Eigenvector. A small collection of custom nodes for use with ComfyUI, for geometry calculations"
        },
        {
            "author": "bronkula",
            "title": "comfyui-fitsize",
            "id": "fitsize",
            "reference": "https://github.com/bronkula/comfyui-fitsize",
            "files": [
                "https://github.com/bronkula/comfyui-fitsize"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Fit Size From Int/Image/Resize, Load Image And Resize To Fit, Pick Image From Batch/List, Crop Image Into Even Pieces, Image Region To Mask... A simple set of nodes for making an image fit within a bounding box"
        },
        {
            "author": "toyxyz",
            "title": "ComfyUI_toyxyz_test_nodes",
            "id": "toyxyz",
            "reference": "https://github.com/toyxyz/ComfyUI_toyxyz_test_nodes",
            "files": [
                "https://github.com/toyxyz/ComfyUI_toyxyz_test_nodes"
            ],
            "install_type": "git-clone",
            "description": "This node was created to send a webcam to ComfyUI in real time. This node is recommended for use with LCM."
        },
        {
            "author": "thecooltechguy",
            "title": "ComfyUI Stable Video Diffusion",
            "reference": "https://github.com/thecooltechguy/ComfyUI-Stable-Video-Diffusion",
            "files": [
                "https://github.com/thecooltechguy/ComfyUI-Stable-Video-Diffusion"
            ],
            "install_type": "git-clone",
            "description": "Easily use Stable Video Diffusion inside ComfyUI!"
        },
        {
            "author": "thecooltechguy",
            "title": "ComfyUI-ComfyRun",
            "reference": "https://github.com/thecooltechguy/ComfyUI-ComfyRun",
            "files": [
                "https://github.com/thecooltechguy/ComfyUI-ComfyRun"
            ],
            "install_type": "git-clone",
            "description": "The easiest way to run & share any ComfyUI workflow [a/https://comfyrun.com](https://comfyrun.com)"
        },
        {
            "author": "thecooltechguy",
            "title": "ComfyUI-MagicAnimate",
            "reference": "https://github.com/thecooltechguy/ComfyUI-MagicAnimate",
            "files": [
                "https://github.com/thecooltechguy/ComfyUI-MagicAnimate"
            ],
            "install_type": "git-clone",
            "description": "Easily use Magic Animate within ComfyUI!\n[w/WARN: This extension requires 15GB disk space.]"
        },
        {
            "author": "thecooltechguy",
            "title": "ComfyUI-ComfyWorkflows",
            "reference": "https://github.com/thecooltechguy/ComfyUI-ComfyWorkflows",
            "files": [
                "https://github.com/thecooltechguy/ComfyUI-ComfyWorkflows"
            ],
            "install_type": "git-clone",
            "description": "The best way to run, share, & discover thousands of ComfyUI workflows."
        },
        {
            "author": "Danand",
            "title": "Comfy Couple",
            "reference": "https://github.com/Danand/ComfyUI-ComfyCouple",
            "files": [
                "https://github.com/Danand/ComfyUI-ComfyCouple"
            ],
            "install_type": "git-clone",
            "description": " If you want to draw two different characters together without blending their features, so you could try to check out this custom node."
        },
        {
            "author": "42lux",
            "title": "ComfyUI-safety-checker",
            "reference": "https://github.com/42lux/ComfyUI-safety-checker",
            "files": [
                "https://github.com/42lux/ComfyUI-safety-checker"
            ],
            "install_type": "git-clone",
            "description": "A NSFW/Safety Checker Node for ComfyUI."
        },
        {
            "author": "sergekatzmann",
            "title": "ComfyUI_Nimbus-Pack",
            "reference": "https://github.com/sergekatzmann/ComfyUI_Nimbus-Pack",
            "files": [
                "https://github.com/sergekatzmann/ComfyUI_Nimbus-Pack"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Image Square Adapter Node, Image Resize And Crop Node"
        },
        {
            "author": "komojini",
            "title": "ComfyUI_SDXL_DreamBooth_LoRA_CustomNodes",
            "reference": "https://github.com/komojini/ComfyUI_SDXL_DreamBooth_LoRA_CustomNodes",
            "files": [
                "https://github.com/komojini/ComfyUI_SDXL_DreamBooth_LoRA_CustomNodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes:XL DreamBooth LoRA, S3 Bucket LoRA"
        },
        {
            "author": "komojini",
            "title": "komojini-comfyui-nodes",
            "id": "komojini-nodes",
            "reference": "https://github.com/komojini/komojini-comfyui-nodes",
            "files": [
                "https://github.com/komojini/komojini-comfyui-nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes:YouTube Video Loader. Custom ComfyUI Nodes for video generation"
        },
        {
            "author": "ZHO-ZHO-ZHO",
            "title": "APISR IN COMFYUI",
            "id": "apisr-zho",
            "reference": "https://github.com/ZHO-ZHO-ZHO/ComfyUI-APISR",
            "files": [
                "https://github.com/ZHO-ZHO-ZHO/ComfyUI-APISR"
            ],
            "install_type": "git-clone",
            "description": "Unofficial implementation of APISR for ComfyUI, both image and video"
        },
        {
            "author": "ZHO-ZHO-ZHO",
            "title": "ComfyUI-Text_Image-Composite [WIP]",
            "id": "txtimg-composite",
            "reference": "https://github.com/ZHO-ZHO-ZHO/ComfyUI-Text_Image-Composite",
            "files": [
                "https://github.com/ZHO-ZHO-ZHO/ComfyUI-Text_Image-Composite"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Text_Image_Zho, Text_Image_Multiline_Zho, RGB_Image_Zho, AlphaChanelAddByMask, ImageComposite_Zho, ..."
        },
        {
            "author": "ZHO-ZHO-ZHO",
            "title": "ComfyUI-Gemini",
            "id": "gemini",
            "reference": "https://github.com/ZHO-ZHO-ZHO/ComfyUI-Gemini",
            "files": [
                "https://github.com/ZHO-ZHO-ZHO/ComfyUI-Gemini"
            ],
            "install_type": "git-clone",
            "description": "Using Gemini-pro & Gemini-pro-vision in ComfyUI."
        },
        {
            "author": "ZHO-ZHO-ZHO",
            "title": "comfyui-portrait-master-zh-cn",
            "id": "portrait-master-zho",
            "reference": "https://github.com/ZHO-ZHO-ZHO/comfyui-portrait-master-zh-cn",
            "files": [
                "https://github.com/ZHO-ZHO-ZHO/comfyui-portrait-master-zh-cn"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI Portrait Master 简体中文版."
        },
        {
            "author": "ZHO-ZHO-ZHO",
            "title": "ComfyUI-Q-Align",
            "id": "qalign-zho",
            "reference": "https://github.com/ZHO-ZHO-ZHO/ComfyUI-Q-Align",
            "files": [
                "https://github.com/ZHO-ZHO-ZHO/ComfyUI-Q-Align"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Q-Align Scoring. Implementation of [a/Q-Align](https://arxiv.org/abs/2312.17090) for ComfyUI"
        },
        {
            "author": "ZHO-ZHO-ZHO",
            "title": "ComfyUI-InstantID",
            "id": "instantid-zho",
            "reference": "https://github.com/ZHO-ZHO-ZHO/ComfyUI-InstantID",
            "files": [
                "https://github.com/ZHO-ZHO-ZHO/ComfyUI-InstantID"
            ],
            "install_type": "git-clone",
            "description": "Unofficial implementation of [a/InstantID](https://github.com/InstantID/InstantID) for ComfyUI"
        },
        {
            "author": "ZHO-ZHO-ZHO",
            "title": "ComfyUI PhotoMaker (ZHO)",
            "id": "photomaker-zho",
            "reference": "https://github.com/ZHO-ZHO-ZHO/ComfyUI-PhotoMaker-ZHO",
            "files": [
                "https://github.com/ZHO-ZHO-ZHO/ComfyUI-PhotoMaker-ZHO"
            ],
            "install_type": "git-clone",
            "description": "Unofficial implementation of [a/PhotoMaker](https://github.com/TencentARC/PhotoMaker) for ComfyUI"
        },
        {
            "author": "ZHO-ZHO-ZHO",
            "title": "ComfyUI-Qwen-VL-API",
            "id": "qwen-vl-api",
            "reference": "https://github.com/ZHO-ZHO-ZHO/ComfyUI-Qwen-VL-API",
            "files": [
                "https://github.com/ZHO-ZHO-ZHO/ComfyUI-Qwen-VL-API"
            ],
            "install_type": "git-clone",
            "description": "QWen-VL-Plus & QWen-VL-Max in ComfyUI"
        },
        {
            "author": "ZHO-ZHO-ZHO",
            "title": "ComfyUI-SVD-ZHO (WIP)",
            "id": "svd-zho",
            "reference": "https://github.com/ZHO-ZHO-ZHO/ComfyUI-SVD-ZHO",
            "files": [
                "https://github.com/ZHO-ZHO-ZHO/ComfyUI-SVD-ZHO"
            ],
            "install_type": "git-clone",
            "description": "My Workflows + Auxiliary nodes for Stable Video Diffusion (SVD)"
        },
        {
            "author": "ZHO-ZHO-ZHO",
            "title": "ComfyUI SegMoE",
            "id": "segmoe",
            "reference": "https://github.com/ZHO-ZHO-ZHO/ComfyUI-SegMoE",
            "files": [
                "https://github.com/ZHO-ZHO-ZHO/ComfyUI-SegMoE"
            ],
            "install_type": "git-clone",
            "description": "Unofficial implementation of [a/SegMoE: Segmind Mixture of Diffusion Experts](https://github.com/segmind/segmoe) for ComfyUI"
        },
        {
            "author": "ZHO-ZHO-ZHO",
            "title": "ComfyUI YoloWorld-EfficientSAM",
            "id": "yoloworld",
            "reference": "https://github.com/ZHO-ZHO-ZHO/ComfyUI-YoloWorld-EfficientSAM",
            "files": [
                "https://github.com/ZHO-ZHO-ZHO/ComfyUI-YoloWorld-EfficientSAM"
            ],
            "install_type": "git-clone",
            "description": "Unofficial implementation of [a/YOLO-World + EfficientSAM](https://huggingface.co/spaces/SkalskiP/YOLO-World) & [a/YOLO-World](https://github.com/AILab-CVC/YOLO-World) for ComfyUI\nNOTE: Install the efficient_sam model from the Install models menu.\n[w/When installing or updating this custom node, many installation packages may be downgraded due to the installation of requirements.\n!! python3.12 is incompatible.]"
        },
        {
            "author": "ZHO-ZHO-ZHO",
            "title": "ComfyUI-PixArt-alpha-Diffusers",
            "id": "pixart-alpha",
            "reference": "https://github.com/ZHO-ZHO-ZHO/ComfyUI-PixArt-alpha-Diffusers",
            "files": [
                "https://github.com/ZHO-ZHO-ZHO/ComfyUI-PixArt-alpha-Diffusers"
            ],
            "install_type": "git-clone",
            "description": "Unofficial implementation of [a/PixArt-alpha-Diffusers](https://github.com/PixArt-alpha/PixArt-alpha) for ComfyUI"
        },
        {
            "author": "ZHO-ZHO-ZHO",
            "title": "ComfyUI-BRIA_AI-RMBG",
            "id": "bria-ai-rmbg",
            "reference": "https://github.com/ZHO-ZHO-ZHO/ComfyUI-BRIA_AI-RMBG",
            "files": [
                "https://github.com/ZHO-ZHO-ZHO/ComfyUI-BRIA_AI-RMBG"
            ],
            "install_type": "git-clone",
            "description": "Unofficial implementation of BRIA RMBG Model for ComfyUI."
        },
        {
            "author": "ZHO-ZHO-ZHO",
            "title": "DepthFM IN COMFYUI",
            "id": "depthfm",
            "reference": "https://github.com/ZHO-ZHO-ZHO/ComfyUI-DepthFM",
            "files": [
                "https://github.com/ZHO-ZHO-ZHO/ComfyUI-DepthFM"
            ],
            "install_type": "git-clone",
            "description": "Unofficial implementation of [a/DepthFM](https://github.com/CompVis/depth-fm) for ComfyUI"
        },
        {
            "author": "ZHO-ZHO-ZHO",
            "title": "ComfyUI-BiRefNet-ZHO",
            "id": "birefnet",
            "reference": "https://github.com/ZHO-ZHO-ZHO/ComfyUI-BiRefNet-ZHO",
            "files": [
                "https://github.com/ZHO-ZHO-ZHO/ComfyUI-BiRefNet-ZHO"
            ],
            "install_type": "git-clone",
            "description": "Better version for [a/BiRefNet](https://github.com/zhengpeng7/birefnet) in ComfyUI | Both img and video"
        },
        {
            "author": "ZHO-ZHO-ZHO",
            "title": "Phi-3-mini in ComfyUI",
            "id": "phi3mini",
            "reference": "https://github.com/ZHO-ZHO-ZHO/ComfyUI-Phi-3-mini",
            "files": [
                "https://github.com/ZHO-ZHO-ZHO/ComfyUI-Phi-3-mini"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Phi3mini_4k_ModelLoader_Zho, Phi3mini_4k_Zho, Phi3mini_4k_Chat_Zho"
        },
        {
            "author": "ZHO-ZHO-ZHO",
            "title": "ComfyUI-ArtGallery",
            "id": "artgallery",
            "reference": "https://github.com/ZHO-ZHO-ZHO/ComfyUI-ArtGallery",
            "files": [
                "https://github.com/ZHO-ZHO-ZHO/ComfyUI-ArtGallery"
            ],
            "install_type": "git-clone",
            "description": "Prompt Visualization | Art Gallery\n[w/WARN: Installation requires 2GB of space, and it will involve a long download time.]"
        },
        {
            "author": "kenjiqq",
            "title": "qq-nodes-comfyui",
            "reference": "https://github.com/kenjiqq/qq-nodes-comfyui",
            "files": [
                "https://github.com/kenjiqq/qq-nodes-comfyui"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Any List, Image Accumulator Start, Image Accumulator End, Load Lines From Text File, XY Grid Helper, Slice List, Axis To String/Int/Float/Model, ..."
        },
        {
            "author": "80sVectorz",
            "title": "ComfyUI-Static-Primitives",
            "reference": "https://github.com/80sVectorz/ComfyUI-Static-Primitives",
            "files": [
                "https://github.com/80sVectorz/ComfyUI-Static-Primitives"
            ],
            "install_type": "git-clone",
            "description": "Adds Static Primitives to ComfyUI. Mostly to work with reroute nodes"
        },
        {
            "author": "AbdullahAlfaraj",
            "title": "Comfy-Photoshop-SD",
            "reference": "https://github.com/AbdullahAlfaraj/Comfy-Photoshop-SD",
            "files": [
                "https://github.com/AbdullahAlfaraj/Comfy-Photoshop-SD"
            ],
            "install_type": "git-clone",
            "description": "Nodes: load Image with metadata, get config data, load image from base64 string, Load Loras From Prompt, Generate Latent Noise, Combine Two Latents Into Batch, General Purpose Controlnet Unit, ControlNet Script, Content Mask Latent, Auto-Photoshop-SD Seed, Expand and Blur the Mask"
        },
        {
            "author": "zhuanqianfish",
            "title": "EasyCaptureNode for ComfyUI",
            "reference": "https://github.com/zhuanqianfish/ComfyUI-EasyNode",
            "files": [
                "https://github.com/zhuanqianfish/ComfyUI-EasyNode"
            ],
            "install_type": "git-clone",
            "description": "Capture window content from other programs, easyway combined with LCM for real-time painting"
        },
        {
            "author": "discopixel-studio",
            "title": "ComfyUI Discopixel Nodes",
            "reference": "https://github.com/discopixel-studio/comfyui-discopixel",
            "files": [
                "https://github.com/discopixel-studio/comfyui-discopixel"
            ],
            "install_type": "git-clone",
            "description": "Nodes:TransformTemplateOntoFaceMask, ... A small collection of custom nodes for use with ComfyUI, by Discopixel"
        },
        {
            "author": "zcfrank1st",
            "title": "ComfyUI Yolov8",
            "reference": "https://github.com/zcfrank1st/Comfyui-Yolov8",
            "files": [
                "https://github.com/zcfrank1st/Comfyui-Yolov8"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Yolov8Detection, Yolov8Segmentation. Deadly simple yolov8 comfyui plugin"
        },
        {
            "author": "SoftMeng",
            "title": "ComfyUI_Mexx_Styler",
            "reference": "https://github.com/SoftMeng/ComfyUI_Mexx_Styler",
            "files": [
                "https://github.com/SoftMeng/ComfyUI_Mexx_Styler"
            ],
            "install_type": "git-clone",
            "description": "Nodes: ComfyUI Mexx Styler, ComfyUI Mexx Styler Advanced"
        },
        {
            "author": "SoftMeng",
            "title": "ComfyUI_Mexx_Poster",
            "reference": "https://github.com/SoftMeng/ComfyUI_Mexx_Poster",
            "files": [
                "https://github.com/SoftMeng/ComfyUI_Mexx_Poster"
            ],
            "install_type": "git-clone",
            "description": "Nodes: ComfyUI_Mexx_Poster"
        },
        {
            "author": "SoftMeng",
            "title": "ComfyUI_ImageToText",
            "reference": "https://github.com/SoftMeng/ComfyUI_ImageToText",
            "files": [
                "https://github.com/SoftMeng/ComfyUI_ImageToText"
            ],
            "install_type": "git-clone",
            "description": "Nodes: ComfyUI_ImageToText"
        },
        {
            "author": "wmatson",
            "title": "easy-comfy-nodes",
            "reference": "https://github.com/wmatson/easy-comfy-nodes",
            "files": [
                "https://github.com/wmatson/easy-comfy-nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes: HTTP POST, Empty Dict, Assoc Str, Assoc Dict, Assoc Img, Load Img From URL (EZ), Load Img Batch From URLs (EZ), Video Combine + upload (EZ), ..."
        },
        {
            "author": "DrJKL",
            "title": "ComfyUI-Anchors",
            "reference": "https://github.com/DrJKL/ComfyUI-Anchors",
            "files": [
                "https://github.com/DrJKL/ComfyUI-Anchors"
            ],
            "install_type": "git-clone",
            "description": "A ComfyUI extension to add spatial anchors/waypoints to better navigate large workflows."
        },
        {
            "author": "vanillacode314",
            "title": "Simple Wildcard",
            "reference": "https://github.com/vanillacode314/SimpleWildcardsComfyUI",
            "files": ["https://github.com/vanillacode314/SimpleWildcardsComfyUI"],
            "install_type": "git-clone",
            "pip": ["pipe"],
            "description": "A simple wildcard node for ComfyUI. Can also be used a style prompt node."
        },
        {
            "author": "WebDev9000",
            "title": "WebDev9000-Nodes",
            "reference": "https://github.com/WebDev9000/WebDev9000-Nodes",
            "files": [
                "https://github.com/WebDev9000/WebDev9000-Nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Ignore Braces, Settings Switch."
        },
        {
            "author": "Scholar01",
            "title": "SComfyUI-Keyframe",
            "reference": "https://github.com/Scholar01/ComfyUI-Keyframe",
            "files": [
                "https://github.com/Scholar01/ComfyUI-Keyframe"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Keyframe Part, Keyframe Interpolation Part, Keyframe Apply."
        },
        {
            "author": "Haoming02",
            "title": "ComfyUI Diffusion Color Grading",
            "reference": "https://github.com/Haoming02/comfyui-diffusion-cg",
            "files": [
                "https://github.com/Haoming02/comfyui-diffusion-cg"
            ],
            "install_type": "git-clone",
            "description": "This is the ComfyUI port of the joint research between me and TimothyAlexisVass. For more information, check out the original [a/Extension](https://github.com/Haoming02/sd-webui-diffusion-cg) for Automatic1111."
        },
        {
            "author": "Haoming02",
            "title": "comfyui-prompt-format",
            "reference": "https://github.com/Haoming02/comfyui-prompt-format",
            "files": [
                "https://github.com/Haoming02/comfyui-prompt-format"
            ],
            "install_type": "git-clone",
            "description": "This is an Extension for ComfyUI, which helps formatting texts."
        },
        {
            "author": "Haoming02",
            "title": "ComfyUI Clear Screen",
            "reference": "https://github.com/Haoming02/comfyui-clear-screen",
            "files": [
                "https://github.com/Haoming02/comfyui-clear-screen"
            ],
            "install_type": "git-clone",
            "description": "This is an Extension for ComfyUI, which adds a button, CLS, to clear the console window."
        },
        {
            "author": "Haoming02",
            "title": "ComfyUI Menu Anchor",
            "reference": "https://github.com/Haoming02/comfyui-menu-anchor",
            "files": [
                "https://github.com/Haoming02/comfyui-menu-anchor"
            ],
            "install_type": "git-clone",
            "description": "This is an Extension for ComfyUI, which moves the menu to the specified corner on startup."
        },
        {
            "author": "Haoming02",
            "title": "ComfyUI Tab Handler",
            "reference": "https://github.com/Haoming02/comfyui-tab-handler",
            "files": [
                "https://github.com/Haoming02/comfyui-tab-handler"
            ],
            "install_type": "git-clone",
            "description": "This is an Extension for ComfyUI, which moves the menu to the specified corner on startup."
        },
        {
            "author": "Haoming02",
            "title": "ComfyUI Floodgate",
            "reference": "https://github.com/Haoming02/comfyui-floodgate",
            "files": [
                "https://github.com/Haoming02/comfyui-floodgate"
            ],
            "install_type": "git-clone",
            "description": "This is an Extension for ComfyUI, which allows you to control the logic flow with just one click!"
        },
        {
            "author": "bedovyy",
            "title": "ComfyUI_NAIDGenerator",
            "reference": "https://github.com/bedovyy/ComfyUI_NAIDGenerator",
            "files": [
                "https://github.com/bedovyy/ComfyUI_NAIDGenerator"
            ],
            "install_type": "git-clone",
            "description": "This extension helps generate images through NAI."
        },
        {
            "author": "Off-Live",
            "title": "ComfyUI-off-suite",
            "reference": "https://github.com/Off-Live/ComfyUI-off-suite",
            "files": [
                "https://github.com/Off-Live/ComfyUI-off-suite"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Image Crop Fit, OFF SEGS to Image, Crop Center wigh SEGS, Watermarking, GW Number Formatting Node."
        },
        {
            "author": "ningxiaoxiao",
            "title": "comfyui-NDI",
            "reference": "https://github.com/ningxiaoxiao/comfyui-NDI",
            "files": [
                "https://github.com/ningxiaoxiao/comfyui-NDI"
            ],
            "pip": ["ndi-python"],
            "install_type": "git-clone",
            "description": "Real-time input output node for ComfyUI by NDI. Leveraging the powerful linking capabilities of NDI, you can access NDI video stream frames and send images generated by the model to NDI video streams."
        },
        {
            "author": "subtleGradient",
            "title": "Touchpad two-finger gesture support for macOS",
            "reference": "https://github.com/subtleGradient/TinkerBot-tech-for-ComfyUI-Touchpad",
            "files": [
                "https://github.com/subtleGradient/TinkerBot-tech-for-ComfyUI-Touchpad"
            ],
            "install_type": "git-clone",
            "description": "Two-finger scrolling (vertical and horizontal) to pan the canvas. Two-finger pinch to zoom in and out. Command-scroll up and down to zoom in and out. Fixes [a/comfyanonymous/ComfyUI#2059](https://github.com/comfyanonymous/ComfyUI/issues/2059)."
        },
        {
            "author": "zcfrank1st",
            "title": "comfyui_visual_anagram",
            "reference": "https://github.com/zcfrank1st/comfyui_visual_anagrams",
            "files": [
                "https://github.com/zcfrank1st/comfyui_visual_anagrams"
            ],
            "install_type": "git-clone",
            "description": "Nodes:visual_anagrams_sample, visual_anagrams_animate"
        },
        {
            "author": "Electrofried",
            "title": "OpenAINode",
            "reference": "https://github.com/Electrofried/ComfyUI-OpenAINode",
            "files": [
                "https://github.com/Electrofried/ComfyUI-OpenAINode"
            ],
            "install_type": "git-clone",
            "description": "A simply node for hooking in to openAI API based servers via comfyUI"
        },
        {
            "author": "AustinMroz",
            "title": "SpliceTools",
            "reference": "https://github.com/AustinMroz/ComfyUI-SpliceTools",
            "files": [
                "https://github.com/AustinMroz/ComfyUI-SpliceTools"
            ],
            "install_type": "git-clone",
            "description": "Experimental utility nodes with a focus on manipulation of noised latents"
        },
        {
            "author": "11cafe",
            "title": "ComfyUI Workspace Manager - Comfyspace",
            "reference": "https://github.com/11cafe/comfyui-workspace-manager",
            "files": [
                "https://github.com/11cafe/comfyui-workspace-manager"
            ],
            "install_type": "git-clone",
            "description": "A ComfyUI custom node for project management to centralize the management of all your workflows in one place. Seamlessly switch between workflows, create and update them within a single workspace, like Google Docs."
        },
        {
            "author": "knuknX",
            "title": "ComfyUI-Image-Tools",
            "reference": "https://github.com/knuknX/ComfyUI-Image-Tools",
            "files": [
                "https://github.com/knuknX/ComfyUI-Image-Tools"
            ],
            "install_type": "git-clone",
            "description": "Nodes:BatchImageResizeProcessor, SingleImagePathLoader, SingleImageUrlLoader"
        },
        {
            "author": "jtrue",
            "title": "ComfyUI-JaRue",
            "reference": "https://github.com/jtrue/ComfyUI-JaRue",
            "files": [
                "https://github.com/jtrue/ComfyUI-JaRue"
            ],
            "nodename_pattern": "_jru$",
            "install_type": "git-clone",
            "description": "A collection of nodes powering a tensor oracle on a home network with automation"
        },
        {
            "author": "filliptm",
            "title": "ComfyUI_Fill-Nodes",
            "reference": "https://github.com/filliptm/ComfyUI_Fill-Nodes",
            "files": [
                "https://github.com/filliptm/ComfyUI_Fill-Nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes:FL Image Randomizer. The start of a pack that I will continue to build out to fill the gaps of nodes and functionality that I feel is missing in comfyUI"
        },
        {
            "author": "zfkun",
            "title": "ComfyUI_zfkun",
            "reference": "https://github.com/zfkun/ComfyUI_zfkun",
            "files": [
                "https://github.com/zfkun/ComfyUI_zfkun"
            ],
            "install_type": "git-clone",
            "description": "A collection of nodes for common tools, including text preview, text translation (multi-platform, multi-language), image loader, webcamera capture."
        },
        {
            "author": "zcfrank1st",
            "title": "Comfyui-Toolbox",
            "reference": "https://github.com/zcfrank1st/Comfyui-Toolbox",
            "files": [
                "https://github.com/zcfrank1st/Comfyui-Toolbox"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Preview Json, Save Json, Test Json Preview, ... preview and save nodes"
        },
        {
            "author": "talesofai",
            "title": "ComfyUI Browser",
            "reference": "https://github.com/talesofai/comfyui-browser",
            "files": [
                "https://github.com/talesofai/comfyui-browser"
            ],
            "install_type": "git-clone",
            "description": "This is an image/video/workflow browser and manager for ComfyUI. You could add image/video/workflow to collections and load it to ComfyUI. You will be able to use your collections everywhere."
        },
        {
            "author": "yolain",
            "title": "ComfyUI Easy Use",
            "reference": "https://github.com/yolain/ComfyUI-Easy-Use",
            "files": [
                "https://github.com/yolain/ComfyUI-Easy-Use"
            ],
            "install_type": "git-clone",
            "description": "To enhance the usability of ComfyUI, optimizations and integrations have been implemented for several commonly used nodes."
        },
        {
            "author": "bruefire",
            "title": "ComfyUI Sequential Image Loader",
            "reference": "https://github.com/bruefire/ComfyUI-SeqImageLoader",
            "files": [
                "https://github.com/bruefire/ComfyUI-SeqImageLoader"
            ],
            "install_type": "git-clone",
            "description": "This is an extension node for ComfyUI that allows you to load frames from a video in bulk and perform masking and sketching on each frame through a GUI."
        },
        {
            "author": "mmaker",
            "title": "Color Enhance",
            "reference": "https://git.mmaker.moe/mmaker/sd-webui-color-enhance",
            "files": [
                "https://git.mmaker.moe/mmaker/sd-webui-color-enhance"
            ],
            "install_type": "git-clone",
            "description": "Node: Color Enhance, Color Blend. This is the same algorithm GIMP/GEGL uses for color enhancement. The gist of this implementation is that it converts the color space to CIELCh(ab) and normalizes the chroma (or [colorfulness](https://en.wikipedia.org/wiki/Colorfulness)] component. Original source can be found in the link below."
        },
        {
            "author": "modusCell",
            "title": "Preset Dimensions",
            "reference": "https://github.com/modusCell/ComfyUI-dimension-node-modusCell",
            "files": [
                "https://github.com/modusCell/ComfyUI-dimension-node-modusCell"
            ],
            "install_type": "git-clone",
            "description": "Simple node for sharing latent image size between nodes. Preset dimensions for SD and XL."
        },
        {
            "author": "aria1th",
            "title": "ComfyUI-LogicUtils",
            "reference": "https://github.com/aria1th/ComfyUI-LogicUtils",
            "files": [
                "https://github.com/aria1th/ComfyUI-LogicUtils"
            ],
            "install_type": "git-clone",
            "description": "Nodes:UniformRandomFloat..., RandomShuffleInt, YieldableIterator..., LogicGate..., Add..., MergeString, MemoryNode, ..."
        },
        {
            "author": "MitoshiroPJ",
            "title": "ComfyUI Slothful Attention",
            "reference": "https://github.com/MitoshiroPJ/comfyui_slothful_attention",
            "files": [
                "https://github.com/MitoshiroPJ/comfyui_slothful_attention"
            ],
            "install_type": "git-clone",
            "description": "This custom node allow controlling output without training. The reducing method is similar to [a/Spatial-Reduction Attention](https://paperswithcode.com/method/spatial-reduction-attention), but generating speed may not be increased on typical image sizes due to overheads. (In some cases, slightly slower)"
        },
        {
            "author": "brianfitzgerald",
            "title": "StyleAligned for ComfyUI",
            "reference": "https://github.com/brianfitzgerald/style_aligned_comfy",
            "files": [
                "https://github.com/brianfitzgerald/style_aligned_comfy"
            ],
            "install_type": "git-clone",
            "description": "Implementation of the [a/StyleAligned](https://style-aligned-gen.github.io/) paper for ComfyUI. This node allows you to apply a consistent style to all images in a batch; by default it will use the first image in the batch as the style reference, forcing all other images to be consistent with it."
        },
        {
            "author": "deroberon",
            "title": "demofusion-comfyui",
            "id": "demofusion",
            "reference": "https://github.com/deroberon/demofusion-comfyui",
            "files": [
                "https://github.com/deroberon/demofusion-comfyui"
            ],
            "install_type": "git-clone",
            "description": "The Demofusion Custom Node is a wrapper that adapts the work and implementation of the [a/DemoFusion](https://ruoyidu.github.io/demofusion/demofusion.html) technique created and implemented by Ruoyi Du to the Comfyui environment."
        },
        {
            "author": "deroberon",
            "title": "StableZero123-comfyui",
            "reference": "https://github.com/deroberon/StableZero123-comfyui",
            "files": [
                "https://github.com/deroberon/StableZero123-comfyui"
            ],
            "install_type": "git-clone",
            "description": "StableZero123 is a node wrapper that uses the model and technique provided [here](https://github.com/SUDO-AI-3D/zero123plus/). It uses the Zero123plus model to generate 3D views using just one image."
        },
        {
            "author": "glifxyz",
            "title": "ComfyUI-GlifNodes",
            "id": "glif",
            "reference": "https://github.com/glifxyz/ComfyUI-GlifNodes",
            "files": [
                "https://github.com/glifxyz/ComfyUI-GlifNodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Consistency VAE Decoder."
        },
        {
            "author": "concarne000",
            "title": "ConCarneNode",
            "reference": "https://github.com/concarne000/ConCarneNode",
            "files": [
                "https://github.com/concarne000/ConCarneNode"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Bing Image Grabber, Zephyr chat, Hermes Chat"
        },
        {
            "author": "Aegis72",
            "title": "AegisFlow Utility Nodes",
            "id": "aegis",
            "reference": "https://github.com/aegis72/aegisflow_utility_nodes",
            "files": [
                "https://github.com/aegis72/aegisflow_utility_nodes"
            ],
            "install_type": "git-clone",
            "description": "These nodes will be placed in comfyui/custom_nodes/aegisflow and contains the image passer (accepts an image as either wired or wirelessly, input and passes it through. Latent passer does the same for latents, and the Preprocessor chooser allows a passthrough image and 10 controlnets to be passed in AegisFlow Shima. The inputs on the Preprocessor  chooser should not be renamed if you intend to accept image inputs wirelessly through UE nodes. It can be done, but the send node input regex for each controlnet preprocessor column must also be changed."
        },
        {
            "author": "Aegis72",
            "title": "ComfyUI-styles-all",
            "id": "styles-all",
            "reference": "https://github.com/aegis72/comfyui-styles-all",
            "files": [
                "https://github.com/aegis72/comfyui-styles-all"
            ],
            "install_type": "git-clone",
            "description": "This is a straight clone of Azazeal04's all-in-one styler menu, which was removed from gh on Jan 21, 2024. I have made no changes to the files at all."
        },
        {
            "author": "glibsonoran",
            "title": "Plush-for-ComfyUI",
            "id": "plush",
            "reference": "https://github.com/glibsonoran/Plush-for-ComfyUI",
            "files": [
                "https://github.com/glibsonoran/Plush-for-ComfyUI"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Style Prompt, OAI Dall_e Image. Plush contains two OpenAI enabled nodes: Style Prompt: Takes your prompt and the art style you specify and generates a prompt from ChatGPT3 or 4 that Stable Diffusion can use to generate an image in that style. OAI Dall_e 3: Takes your prompt and parameters and produces a Dall_e3 image in ComfyUI."
        },
        {
            "author": "vienteck",
            "title": "ComfyUI-Chat-GPT-Integration",
            "reference": "https://github.com/vienteck/ComfyUI-Chat-GPT-Integration",
            "files": [
                "https://github.com/vienteck/ComfyUI-Chat-GPT-Integration"
            ],
            "install_type": "git-clone",

            "description": "This extension is a reimagined version based on the [a/ComfyUI-QualityOfLifeSuit_Omar92](https://github.com/omar92/ComfyUI-QualityOfLifeSuit_Omar92) extension, and it supports integration with ChatGPT through the new OpenAI API.\nNOTE: See detailed installation instructions on the [a/repository](https://github.com/vienteck/ComfyUI-Chat-GPT-Integration)."
        },
        {
            "author": "MNeMoNiCuZ",
            "title": "ComfyUI-mnemic-nodes",
            "id": "mnemic",
            "reference": "https://github.com/MNeMoNiCuZ/ComfyUI-mnemic-nodes",
            "files": [
                "https://github.com/MNeMoNiCuZ/ComfyUI-mnemic-nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Save Text File"
        },
        {
            "author": "AI2lab",
            "title": "comfyUI-tool-2lab",
            "id": "tool2lab",
            "reference": "https://github.com/AI2lab/comfyUI-tool-2lab",
            "files": [
                "https://github.com/AI2lab/comfyUI-tool-2lab"
            ],
            "install_type": "git-clone",
            "description": "simple tool set for developing workflow and publish to web api server"
        },
        {
            "author": "AI2lab",
            "title": "comfyUI-DeepSeek-2lab",
            "id": "deepseek",
            "reference": "https://github.com/AI2lab/comfyUI-DeepSeek-2lab",
            "files": [
                "https://github.com/AI2lab/comfyUI-DeepSeek-2lab"
            ],
            "install_type": "git-clone",
            "description": "Unofficial implementation of DeepSeek for ComfyUI"
        },
        {
            "author": "SpaceKendo",
            "title": "Text to video for Stable Video Diffusion in ComfyUI",
            "id": "svd-txt2vid",
            "reference": "https://github.com/SpaceKendo/ComfyUI-svd_txt2vid",
            "files": [
                "https://github.com/SpaceKendo/ComfyUI-svd_txt2vid"
            ],
            "install_type": "git-clone",
            "description": "This is node replaces the init_image conditioning for the [a/Stable Video Diffusion](https://github.com/Stability-AI/generative-models) image to video model with text embeds, together with a conditioning frame. The conditioning frame is a set of latents."
        },
        {
            "author": "NimaNzrii",
            "title": "comfyui-popup_preview",
            "id": "popup-preview",
            "reference": "https://github.com/NimaNzrii/comfyui-popup_preview",
            "files": [
                "https://github.com/NimaNzrii/comfyui-popup_preview"
            ],
            "install_type": "git-clone",
            "description": "popup preview for comfyui"
        },
        {
            "author": "NimaNzrii",
            "title": "comfyui-photoshop",
            "id": "comfy-photoshop",
            "reference": "https://github.com/NimaNzrii/comfyui-photoshop",
            "files": [
                "https://github.com/NimaNzrii/comfyui-photoshop"
            ],
            "install_type": "git-clone",
            "description": "Photoshop node inside of ComfyUi, send and get data from Photoshop"
        },
        {
            "author": "Rui",
            "title": "RUI-Nodes",
            "id": "rui-nodes",
            "reference": "https://github.com/rui40000/RUI-Nodes",
            "files": [
                "https://github.com/rui40000/RUI-Nodes"
            ],
            "install_type": "git-clone",
            "description": "Rui's workflow-specific custom node, written using GPT."
        },
        {
            "author": "dmarx",
            "title": "ComfyUI-Keyframed",
            "id": "keyframed",
            "reference": "https://github.com/dmarx/ComfyUI-Keyframed",
            "files": [
                "https://github.com/dmarx/ComfyUI-Keyframed"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI nodes to facilitate parameter/prompt keyframing using comfyui nodes for defining and manipulating parameter curves. Essentially provides a ComfyUI interface to the [a/keyframed](https://github.com/dmarx/keyframed) library."
        },
        {
            "author": "dmarx",
            "title": "ComfyUI-AudioReactive",
            "id": "audioreactive",
            "reference": "https://github.com/dmarx/ComfyUI-AudioReactive",
            "files": [
                "https://github.com/dmarx/ComfyUI-AudioReactive"
            ],
            "install_type": "git-clone",
            "description": "porting audioreactivity pipeline from vktrs to comfyui."
        },
        {
            "author": "TripleHeadedMonkey",
            "title": "ComfyUI_MileHighStyler",
            "id": "milehighstyler",
            "reference": "https://github.com/TripleHeadedMonkey/ComfyUI_MileHighStyler",
            "files": [
                "https://github.com/TripleHeadedMonkey/ComfyUI_MileHighStyler"
            ],
            "install_type": "git-clone",
            "description": "This extension provides various SDXL Prompt Stylers. See: [a/youtube](https://youtu.be/WBHI-2uww7o?si=dijvDaUI4nmx4VkF)"
        },
        {
            "author": "BennyKok",
            "title": "ComfyUI Deploy",
            "id": "comfy-deploy",
            "reference": "https://github.com/BennyKok/comfyui-deploy",
            "files": [
                "https://github.com/BennyKok/comfyui-deploy"
            ],
            "install_type": "git-clone",
            "description": "Open source comfyui deployment platform, a vercel for generative workflow infra."
        },
        {
            "author": "florestefano1975",
            "title": "comfyui-portrait-master",
            "id": "portrait-master",
            "reference": "https://github.com/florestefano1975/comfyui-portrait-master",
            "files": [
                "https://github.com/florestefano1975/comfyui-portrait-master"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI Portrait Master. A node designed to help AI image creators to generate prompts for human portraits."
        },
        {
            "author": "florestefano1975",
            "title": "comfyui-prompt-composer",
            "id": "prompt-composer",
            "reference": "https://github.com/florestefano1975/comfyui-prompt-composer",
            "files": [
                "https://github.com/florestefano1975/comfyui-prompt-composer"
            ],
            "install_type": "git-clone",
            "description": "A suite of tools for prompt management. Combining nodes helps the user sequence strings for prompts, also creating logical groupings if necessary. Individual nodes can be chained together in any order."
        },
        {
            "author": "florestefano1975",
            "title": "ComfyUI StabilityAI Suite",
            "id": "sai-suite",
            "reference": "https://github.com/florestefano1975/ComfyUI-StabilityAI-Suite",
            "files": [
                "https://github.com/florestefano1975/ComfyUI-StabilityAI-Suite"
            ],
            "install_type": "git-clone",
            "description": "This fork of the official StabilityAI repository contains a number of enhancements and implementations."
        },
        {
            "author": "florestefano1975",
            "title": "ComfyUI HiDiffusion",
            "id": "hidiffusion",
            "reference": "https://github.com/florestefano1975/ComfyUI-HiDiffusion",
            "files": [
                "https://github.com/florestefano1975/ComfyUI-HiDiffusion"
            ],
            "install_type": "git-clone",
            "description": "Simple custom nodes for testing and use HiDiffusion technology: https://github.com/megvii-research/HiDiffusion/"
        },
        {
            "author": "mozman",
            "title": "ComfyUI_mozman_nodes",
            "id": "mozman-nodes",
            "reference": "https://github.com/mozman/ComfyUI_mozman_nodes",
            "files": [
                "https://github.com/mozman/ComfyUI_mozman_nodes"
            ],
            "install_type": "git-clone",
            "description": "This extension provides styler nodes for SDXL.\n\nNOTE: Due to the dynamic nature of node name definitions, ComfyUI-Manager cannot recognize the node list from this extension. The Missing nodes and Badge features are not available for this extension."
        },
        {
            "author": "rcsaquino",
            "title": "rcsaquino/comfyui-custom-nodes",
            "id": "rcsaquino-nodes",
            "reference": "https://github.com/rcsaquino/comfyui-custom-nodes",
            "files": [
                "https://github.com/rcsaquino/comfyui-custom-nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes: VAE Processor, VAE Loader, Background Remover"
        },
        {
            "author": "rcfcu2000",
            "title": "zhihuige-nodes-comfyui",
            "id": "zhihuige-nodes",
            "reference": "https://github.com/rcfcu2000/zhihuige-nodes-comfyui",
            "files": [
                "https://github.com/rcfcu2000/zhihuige-nodes-comfyui"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Combine ZHGMasks, Cover ZHGMasks, ZHG FaceIndex, ZHG SaveImage, ZHG SmoothEdge, ZHG GetMaskArea, ..."
        },
        {
            "author": "IDGallagher",
            "title": "IG Interpolation Nodes",
            "id": "ig-nodes",
            "reference": "https://github.com/IDGallagher/ComfyUI-IG-Nodes",
            "files": [
                "https://github.com/IDGallagher/ComfyUI-IG-Nodes"
            ],
            "install_type": "git-clone",
            "description": "Custom nodes to aid in the exploration of Latent Space"
        },
        {
            "author": "violet-chen",
            "title": "comfyui-psd2png",
            "id": "psd2png",
            "reference": "https://github.com/violet-chen/comfyui-psd2png",
            "files": [
                "https://github.com/violet-chen/comfyui-psd2png"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Psd2Png."
        },
        {
            "author": "lldacing",
            "title": "comfyui-easyapi-nodes",
            "id": "easyapi",
            "reference": "https://github.com/lldacing/comfyui-easyapi-nodes",
            "files": [
                "https://github.com/lldacing/comfyui-easyapi-nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Base64 To Image, Image To Base64, Load Image To Base64."
        },
        {
            "author": "CosmicLaca",
            "title": "Primere nodes for ComfyUI",
            "id": "primere",
            "reference": "https://github.com/CosmicLaca/ComfyUI_Primere_Nodes",
            "files": [
                "https://github.com/CosmicLaca/ComfyUI_Primere_Nodes"
            ],
            "install_type": "git-clone",
            "description": "This extension provides various utility nodes. Inputs(prompt, styles, dynamic, merger, ...), Outputs(style pile), Dashboard(selectors, loader, switch, ...), Networks(LORA, Embedding, Hypernetwork), Visuals(visual selectors, )"
        },
        {
            "author": "RenderRift",
            "title": "ComfyUI-RenderRiftNodes",
            "id": "renderrift",
            "reference": "https://github.com/RenderRift/ComfyUI-RenderRiftNodes",
            "files": [
                "https://github.com/RenderRift/ComfyUI-RenderRiftNodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes:RR_Date_Folder_Format, RR_Image_Metadata_Overlay, RR_VideoPathMetaExtraction, RR_DisplayMetaOptions. This extension provides nodes designed to enhance the Animatediff workflow."
        },
        {
            "author": "OpenArt-AI",
            "title": "ComfyUI Assistant",
            "id": "openart",
            "reference": "https://github.com/OpenArt-AI/ComfyUI-Assistant",
            "files": [
                "https://github.com/OpenArt-AI/ComfyUI-Assistant"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI Assistant is your one stop plugin for everything you need to get started with comfy-ui. Now it provides useful courses, tutorials, and basic templates."
        },
        {
            "author": "ttulttul",
            "title": "ComfyUI Iterative Mixing Nodes",
            "id": "itermix",
            "reference": "https://github.com/ttulttul/ComfyUI-Iterative-Mixer",
            "files": [
                "https://github.com/ttulttul/ComfyUI-Iterative-Mixer"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Iterative Mixing KSampler, Batch Unsampler, Iterative Mixing KSampler Advanced"
        },
        {
            "author": "ttulttul",
            "title": "ComfyUI-Tensor-Operations",
            "id": "tensorop",
            "reference": "https://github.com/ttulttul/ComfyUI-Tensor-Operations",
            "files": [
                "https://github.com/ttulttul/ComfyUI-Tensor-Operations"
            ],
            "install_type": "git-clone",
            "description": "This repo contains nodes for ComfyUI that implement some helpful operations on tensors, such as normalization."
        },
        {
            "author": "jitcoder",
            "title": "LoraInfo",
            "id": "lorainfo",
            "reference": "https://github.com/jitcoder/lora-info",
            "files": [
                "https://github.com/jitcoder/lora-info"
            ],
            "install_type": "git-clone",
            "description": "Shows Lora information from CivitAI and outputs trigger words and example prompt"
        },
        {
            "author": "ceruleandeep",
            "title": "ComfyUI LLaVA Captioner",
            "id": "llava-captioner",
            "reference": "https://github.com/ceruleandeep/ComfyUI-LLaVA-Captioner",
            "files": [
                "https://github.com/ceruleandeep/ComfyUI-LLaVA-Captioner"
            ],
            "install_type": "git-clone",
            "description": "A ComfyUI extension for chatting with your images. Runs on your own system, no external services used, no filter. Uses the [a/LLaVA multimodal LLM](https://llava-vl.github.io/) so you can give instructions or ask questions in natural language. It's maybe as smart as GPT3.5, and it can see."
        },
        {
            "author": "styler00dollar",
            "title": "ComfyUI-sudo-latent-upscale",
            "id": "sudo-latent-upscale",
            "reference": "https://github.com/styler00dollar/ComfyUI-sudo-latent-upscale",
            "files": [
                "https://github.com/styler00dollar/ComfyUI-sudo-latent-upscale"
            ],
            "install_type": "git-clone",
            "description": "Directly upscaling inside the latent space. Model was trained for SD1.5 and drawn content. Might add new architectures or update models at some point. This took heavy inspriration from [city96/SD-Latent-Upscaler](https://github.com/city96/SD-Latent-Upscaler) and [Ttl/ComfyUi_NNLatentUpscale](https://github.com/Ttl/ComfyUi_NNLatentUpscale). "
        },
        {
            "author": "styler00dollar",
            "title": "ComfyUI-deepcache",
            "id": "deepcache",
            "reference": "https://github.com/styler00dollar/ComfyUI-deepcache",
            "files": [
                "https://github.com/styler00dollar/ComfyUI-deepcache"
            ],
            "install_type": "git-clone",
            "description": "This extension provides nodes for [a/DeepCache: Accelerating Diffusion Models for Free](https://arxiv.org/abs/2312.00858)\nNOTE:Original code can be found [a/here](https://gist.github.com/laksjdjf/435c512bc19636e9c9af4ee7bea9eb86). Full credit to laksjdjf for sharing the code. "
        },
        {
            "author": "HarroweD and quadmoon",
            "title": "Harrlogos Prompt Builder Node",
            "id": "harrlogos-prompt-builder",
            "reference": "https://github.com/NotHarroweD/Harronode",
            "nodename_pattern": "Harronode",
            "files": [
                "https://github.com/NotHarroweD/Harronode"
            ],
            "install_type": "git-clone",
            "description": "Harronode is a custom node designed to build prompts easily for use with the Harrlogos SDXL LoRA. This Node simplifies the process of crafting prompts and makes all built in activation terms available at your fingertips."
        },
        {
            "author": "Limitex",
            "title": "ComfyUI-Calculation",
            "id": "calc",
            "reference": "https://github.com/Limitex/ComfyUI-Calculation",
            "files": [
                "https://github.com/Limitex/ComfyUI-Calculation"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Center Calculation. Improved Numerical Calculation for ComfyUI"
        },
        {
            "author": "Limitex",
            "title": "ComfyUI-Diffusers",
            "id": "diffusers",
            "reference": "https://github.com/Limitex/ComfyUI-Diffusers",
            "files": [
                "https://github.com/Limitex/ComfyUI-Diffusers"
            ],
            "install_type": "git-clone",
            "description": "This extension enables the use of the diffuser pipeline in ComfyUI."
        },
        {
            "author": "aiXander",
            "title": "Various custom nodes by Eden.art",
            "id": "Eden",
            "reference": "https://github.com/edenartlab/eden_comfy_pipelines",
            "files": [
                "https://github.com/edenartlab/eden_comfy_pipelines"
            ],
            "install_type": "git-clone",
            "description": "A set of custom nodes for various purposed, maintained by Eden.art"
        },
        {
            "author": "pkpk",
            "title": "ComfyUI-SaveAVIF",
            "id": "saveavif",
            "reference": "https://github.com/pkpkTech/ComfyUI-SaveAVIF",
            "files": [
                "https://github.com/pkpkTech/ComfyUI-SaveAVIF"
            ],
            "install_type": "git-clone",
            "description": "A custom node on ComfyUI that saves images in AVIF format. Workflow can be loaded from images saved at this node."
        },
        {
            "author": "pkpkTech",
            "title": "ComfyUI-ngrok",
            "id": "ngrok",
            "reference": "https://github.com/pkpkTech/ComfyUI-ngrok",
            "files": [
                "https://github.com/pkpkTech/ComfyUI-ngrok"
            ],
            "install_type": "git-clone",
            "description": "Use ngrok to allow external access to ComfyUI.\nNOTE: Need to manually modify a token inside the __init__.py file."
        },
        {
            "author": "pkpk",
            "title": "ComfyUI-TemporaryLoader",
            "id": "temploader",
            "reference": "https://github.com/pkpkTech/ComfyUI-TemporaryLoader",
            "files": [
                "https://github.com/pkpkTech/ComfyUI-TemporaryLoader"
            ],
            "install_type": "git-clone",
            "description": "This is a custom node of ComfyUI that downloads and loads models from the input URL. The model is temporarily downloaded into memory and not saved to storage.\nThis could be useful when trying out models or when using various models on machines with limited storage. Since the model is downloaded into memory, expect higher memory usage than usual."
        },
        {
            "author": "pkpkTech",
            "title": "ComfyUI-SaveQueues",
            "id": "savequeues",
            "reference": "https://github.com/pkpkTech/ComfyUI-SaveQueues",
            "files": [
                "https://github.com/pkpkTech/ComfyUI-SaveQueues"
            ],
            "install_type": "git-clone",
            "description": "Add a button to the menu to save and load the running queue and the pending queues.\nThis is intended to be used when you want to exit ComfyUI with queues still remaining."
        },
        {
            "author": "Crystian",
            "title": "Crystools",
            "id": "crytools",
            "reference": "https://github.com/crystian/ComfyUI-Crystools",
            "files": [
                "https://github.com/crystian/ComfyUI-Crystools"
            ],
            "nodename_pattern": " \\[Crystools\\]$",
            "install_type": "git-clone",
            "description": "With this suit, you can see the resources monitor, progress bar & time elapsed, metadata and compare between two images, compare between two JSONs, show any value to console/display, pipes, and more!\nThis provides better nodes to load/save images, previews, etc, and see \"hidden\" data without loading a new workflow."
        },
        {
            "author": "Crystian",
            "title": "Crystools-save",
            "id": "crytools-save",
            "reference": "https://github.com/crystian/ComfyUI-Crystools-save",
            "files": [
                "https://github.com/crystian/ComfyUI-Crystools-save"
            ],
            "install_type": "git-clone",
            "description": "With this quality of life extension, you can save your workflow with a specific name and include additional details such as the author, a description, and the version (in metadata/json). Important: When you share your workflow (via png/json), others will be able to see your information!"
        },
        {
            "author": "Kangkang625",
            "title": "ComfyUI-Paint-by-Example",
            "id": "paint-by-example",
            "reference": "https://github.com/Kangkang625/ComfyUI-paint-by-example",
            "pip": ["diffusers"],
            "files": [
                "https://github.com/Kangkang625/ComfyUI-paint-by-example"
            ],
            "install_type": "git-clone",
            "description": "This repo is a simple implementation of [a/Paint-by-Example](https://github.com/Fantasy-Studio/Paint-by-Example) based on its [a/huggingface pipeline](https://huggingface.co/Fantasy-Studio/Paint-by-Example)."
        },
        {
            "author": "54rt1n",
            "title": "ComfyUI-DareMerge",
            "id": "daremerge",
            "reference": "https://github.com/54rt1n/ComfyUI-DareMerge",
            "files": [
                "https://github.com/54rt1n/ComfyUI-DareMerge"
            ],
            "install_type": "git-clone",
            "description": "Merge two checkpoint models by dare ties [a/(https://github.com/yule-BUAA/MergeLM)](https://github.com/yule-BUAA/MergeLM), sort of."
        },
        {
            "author": "an90ray",
            "title": "ComfyUI_RErouter_CustomNodes",
            "id": "rerouter",
            "reference": "https://github.com/an90ray/ComfyUI_RErouter_CustomNodes",
            "files": [
                "https://github.com/an90ray/ComfyUI_RErouter_CustomNodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes: RErouter, String (RE), Int (RE)"
        },
        {
            "author": "jesenzhang",
            "title": "ComfyUI_StreamDiffusion",
            "id": "streamdiffusion",
            "reference": "https://github.com/jesenzhang/ComfyUI_StreamDiffusion",
            "files": [
                "https://github.com/jesenzhang/ComfyUI_StreamDiffusion"
            ],
            "install_type": "git-clone",
            "description": "This is a simple implementation StreamDiffusion(A Pipeline-Level Solution for Real-Time Interactive Generation) for ComfyUI"
        },
        {
            "author": "ai-liam",
            "title": "LiamUtil (single node)",
            "id": "liam-util-single",
            "reference": "https://github.com/ai-liam/comfyui_liam_util",
            "files": [
                "https://github.com/ai-liam/comfyui_liam_util"
            ],
            "install_type": "git-clone",
            "description": "Nodes: LiamLoadImage. This node provides the capability to load images from a URL."
        },
        {
            "author": "ai-liam",
            "title": "LiamUtil",
            "id": "liam-util",
            "reference": "https://github.com/ai-liam/comfyui-liam",
            "files": [
                "https://github.com/ai-liam/comfyui-liam"
            ],
            "install_type": "git-clone",
            "description": "Nodes: LiamLibLoadImage, LiamLibImageToGray, LiamLibSaveImg, LiamLibFillImage, PreviewReliefImage, GetBetterDepthImage, LiamLibSaveText"
        },
        {
            "author": "Ryuukeisyou",
            "title": "comfyui_face_parsing",
            "id": "face-parsing",
            "reference": "https://github.com/Ryuukeisyou/comfyui_face_parsing",
            "files": [
                "https://github.com/Ryuukeisyou/comfyui_face_parsing"
            ],
            "install_type": "git-clone",
            "description": "This is a set of custom nodes for ComfyUI. The nodes utilize the [a/face parsing model](https://huggingface.co/jonathandinu/face-parsing) to provide detailed segmantation of face. To improve face segmantation accuracy, [a/yolov8 face model](https://huggingface.co/Bingsu/adetailer/) is used to first extract face from an image. There are also auxiliary nodes for image and mask processing. A guided filter is also provided for skin smoothing."
        },
        {
            "author": "tocubed",
            "title": "ComfyUI-AudioReactor",
            "id": "audioreactor",
            "reference": "https://github.com/tocubed/ComfyUI-AudioReactor",
            "files": [
                "https://github.com/tocubed/ComfyUI-AudioReactor"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Shadertoy, Load Audio (from Path), Audio Frame Transform (Shadertoy), Audio Frame Transform (Beats)"
        },
        {
            "author": "ntc-ai",
            "title": "ComfyUI - Apply LoRA Stacker with DARE",
            "reference": "https://github.com/ntc-ai/ComfyUI-DARE-LoRA-Merge",
            "files": [
                "https://github.com/ntc-ai/ComfyUI-DARE-LoRA-Merge"
            ],
            "install_type": "git-clone",
            "description": "An experiment about combining multiple LoRAs with [a/DARE](https://arxiv.org/pdf/2311.03099.pdf)"
        },
        {
            "author": "wwwins",
            "title": "ComfyUI-Simple-Aspect-Ratio",
            "reference": "https://github.com/wwwins/ComfyUI-Simple-Aspect-Ratio",
            "files": [
                "https://github.com/wwwins/ComfyUI-Simple-Aspect-Ratio"
            ],
            "install_type": "git-clone",
            "description": "Nodes:SimpleAspectRatio"
        },
        {
            "author": "ownimage",
            "title": "ComfyUI-ownimage",
            "reference": "https://github.com/ownimage/ComfyUI-ownimage",
            "files": [
                "https://github.com/ownimage/ComfyUI-ownimage"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Caching Image Loader."
        },
        {
            "author": "Millyarde",
            "title": "Pomfy - Photoshop and ComfyUI 2-way sync",
            "reference": "https://github.com/Millyarde/Pomfy",
            "files": [
                "https://github.com/Millyarde/Pomfy"
            ],
            "install_type": "git-clone",
            "description": "Photoshop custom nodes inside of ComfyUi, send and get data via Photoshop UXP plugin for cross platform support"
        },
        {
            "author": "Ryuukeisyou",
            "title": "comfyui_io_helpers",
            "reference": "https://github.com/Ryuukeisyou/comfyui_io_helpers",
            "files": [
                "https://github.com/Ryuukeisyou/comfyui_io_helpers"
            ],
            "install_type": "git-clone",
            "description": "Nodes:ImageLoadFromBase64, ImageLoadByPath, ImageLoadAsMaskByPath, ImageSaveToPath, ImageSaveAsBase64."
        },
        {
            "author": "flowtyone",
            "title": "ComfyUI-Flowty-LDSR",
            "reference": "https://github.com/flowtyone/ComfyUI-Flowty-LDSR",
            "files": [
                "https://github.com/flowtyone/ComfyUI-Flowty-LDSR"
            ],
            "install_type": "git-clone",
            "description": "This is a custom node that lets you take advantage of Latent Diffusion Super Resolution (LDSR) models inside ComfyUI."
        },
        {
            "author": "flowtyone",
            "title": "ComfyUI-Flowty-TripoSR",
            "reference": "https://github.com/flowtyone/ComfyUI-Flowty-TripoSR",
            "files": [
                "https://github.com/flowtyone/ComfyUI-Flowty-TripoSR"
            ],
            "install_type": "git-clone",
            "description": "This is a custom node that lets you use TripoSR right from ComfyUI.\n[a/TripoSR](https://github.com/VAST-AI-Research/TripoSR) is a state-of-the-art open-source model for fast feedforward 3D reconstruction from a single image, collaboratively developed by Tripo AI and Stability AI. (TL;DR it creates a 3d model from an image.)"
        },
        {
            "author": "flowtyone",
            "title": "ComfyUI-Flowty-CRM",
            "reference": "https://github.com/flowtyone/ComfyUI-Flowty-CRM",
            "files": [
                "https://github.com/flowtyone/ComfyUI-Flowty-CRM"
            ],
            "install_type": "git-clone",
            "description": "This is a custom node that lets you use Convolutional Reconstruction Models right from ComfyUI.\n[a/CRM](https://ml.cs.tsinghua.edu.cn/~zhengyi/CRM/) is a high-fidelity feed-forward single image-to-3D generative model."
        },
        {
            "author": "massao000",
            "title": "ComfyUI_aspect_ratios",
            "reference": "https://github.com/massao000/ComfyUI_aspect_ratios",
            "files": [
                "https://github.com/massao000/ComfyUI_aspect_ratios"
            ],
            "install_type": "git-clone",
            "description": "Aspect ratio selector for ComfyUI based on [a/sd-webui-ar](https://github.com/alemelis/sd-webui-ar?tab=readme-ov-file)."
        },
        {
            "author": "SiliconFlow",
            "title": "OneDiff Nodes",
            "id": "onddiff",
            "reference": "https://github.com/siliconflow/onediff_comfy_nodes",
            "files": [
                "https://github.com/siliconflow/onediff_comfy_nodes"
            ],
            "install_type": "git-clone",
            "description": "[a/Onediff](https://github.com/siliconflow/onediff) ComfyUI Nodes."
        },
        {
            "author": "hinablue",
            "title": "ComfyUI 3D Pose Editor",
            "id": "3d-pose-editor",
            "reference": "https://github.com/hinablue/ComfyUI_3dPoseEditor",
            "files": [
                "https://github.com/hinablue/ComfyUI_3dPoseEditor"
            ],
            "install_type": "git-clone",
            "description": "Nodes:3D Pose Editor"
        },
        {
            "author": "chaojie",
            "title": "ComfyUI-CameraCtrl-Wrapper",
            "id": "cameractrl-wrapper",
            "reference": "https://github.com/chaojie/ComfyUI-CameraCtrl-Wrapper",
            "files": [
                "https://github.com/chaojie/ComfyUI-CameraCtrl-Wrapper"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI-CameraCtrl-Wrapper"
        },
        {
            "author": "chaojie",
            "title": "ComfyUI-EasyAnimate",
            "id": "easyanimate",
            "reference": "https://github.com/chaojie/ComfyUI-EasyAnimate",
            "files": [
                "https://github.com/chaojie/ComfyUI-EasyAnimate"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI-EasyAnimate"
        },
        {
            "author": "chaojie",
            "title": "ComfyUI_StreamingT2V",
            "id": "streamingt2v",
            "reference": "https://github.com/chaojie/ComfyUI_StreamingT2V",
            "files": [
                "https://github.com/chaojie/ComfyUI_StreamingT2V"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI_StreamingT2V"
        },
        {
            "author": "chaojie",
            "title": "ComfyUI-Open-Sora-Plan",
            "id": "opensora-plan",
            "reference": "https://github.com/chaojie/ComfyUI-Open-Sora-Plan",
            "files": [
                "https://github.com/chaojie/ComfyUI-Open-Sora-Plan"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI-Open-Sora-Plan"
        },
        {
            "author": "chaojie",
            "title": "ComfyUI-MuseTalk",
            "id": "musetalk-chaojie",
            "reference": "https://github.com/chaojie/ComfyUI-MuseTalk",
            "files": [
                "https://github.com/chaojie/ComfyUI-MuseTalk"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI MuseTalk"
        },
        {
            "author": "chaojie",
            "title": "ComfyUI-MuseV",
            "id": "musev",
            "reference": "https://github.com/chaojie/ComfyUI-MuseV",
            "files": [
                "https://github.com/chaojie/ComfyUI-MuseV"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI MuseV"
        },
        {
            "author": "chaojie",
            "title": "ComfyUI-AniPortrait",
            "id": "aniportrait",
            "reference": "https://github.com/chaojie/ComfyUI-AniPortrait",
            "files": [
                "https://github.com/chaojie/ComfyUI-AniPortrait"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI [a/AniPortrait](https://github.com/Zejun-Yang/AniPortrait)"
        },
        {
            "author": "chaojie",
            "title": "ComfyUI-Img2Img-Turbo",
            "id": "img2img-turbo",
            "reference": "https://github.com/chaojie/ComfyUI-Img2Img-Turbo",
            "files": [
                "https://github.com/chaojie/ComfyUI-Img2Img-Turbo"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI Img2Img-Turbo"
        },
        {
            "author": "chaojie",
            "title": "ComfyUI-Champ",
            "id": "champ",
            "reference": "https://github.com/chaojie/ComfyUI-Champ",
            "files": [
                "https://github.com/chaojie/ComfyUI-Champ"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI Champ"
        },
        {
            "author": "chaojie",
            "title": "ComfyUI-Open-Sora",
            "id": "opensora",
            "reference": "https://github.com/chaojie/ComfyUI-Open-Sora",
            "files": [
                "https://github.com/chaojie/ComfyUI-Open-Sora"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI Open Sora\nNOTE:only supports Linux now"
        },
        {
            "author": "chaojie",
            "title": "ComfyUI-Trajectory",
            "id": "trajectory",
            "reference": "https://github.com/chaojie/ComfyUI-Trajectory",
            "files": [
                "https://github.com/chaojie/ComfyUI-Trajectory"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI Trajectory"
        },
        {
            "author": "chaojie",
            "title": "ComfyUI-dust3r",
            "id": "dust3r",
            "reference": "https://github.com/chaojie/ComfyUI-dust3r",
            "files": [
                "https://github.com/chaojie/ComfyUI-dust3r"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI dust3r"
        },
        {
            "author": "chaojie",
            "title": "ComfyUI-Gemma",
            "id": "gamma",
            "reference": "https://github.com/chaojie/ComfyUI-Gemma",
            "files": [
                "https://github.com/chaojie/ComfyUI-Gemma"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI Gemma"
        },
        {
            "author": "chaojie",
            "title": "ComfyUI-DynamiCrafter",
            "id": "dynamicrafter-chaojie",
            "reference": "https://github.com/chaojie/ComfyUI-DynamiCrafter",
            "files": [
                "https://github.com/chaojie/ComfyUI-DynamiCrafter"
            ],
            "install_type": "git-clone",
            "description": "Better Dynamic, Higher Resolution, and Stronger Coherence!"
        },
        {
            "author": "chaojie",
            "title": "ComfyUI-Panda3d",
            "id": "panda3d",
            "reference": "https://github.com/chaojie/ComfyUI-Panda3d",
            "files": [
                "https://github.com/chaojie/ComfyUI-Panda3d"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI 3d engine"
        },
        {
            "author": "chaojie",
            "title": "ComfyUI-Pymunk",
            "id": "pymunk",
            "reference": "https://github.com/chaojie/ComfyUI-Pymunk",
            "files": [
                "https://github.com/chaojie/ComfyUI-Pymunk"
            ],
            "install_type": "git-clone",
            "description": "Pymunk is a easy-to-use pythonic 2d physics library that can be used whenever you need 2d rigid body physics from Python"
        },
        {
            "author": "chaojie",
            "title": "ComfyUI-MotionCtrl",
            "id": "motionctrl",
            "reference": "https://github.com/chaojie/ComfyUI-MotionCtrl",
            "files": [
                "https://github.com/chaojie/ComfyUI-MotionCtrl"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Download the weights of MotionCtrl [a/motionctrl.pth](https://huggingface.co/TencentARC/MotionCtrl/blob/main/motionctrl.pth) and put it to ComfyUI/models/checkpoints"
        },
        {
            "author": "chaojie",
            "title": "ComfyUI-Motion-Vector-Extractor",
            "id": "motion-vector-extractor",
            "reference": "https://github.com/chaojie/ComfyUI-Motion-Vector-Extractor",
            "files": [
                "https://github.com/chaojie/ComfyUI-Motion-Vector-Extractor"
            ],
            "install_type": "git-clone",
            "description": "Nodes: that we currently provide the package only for x86-64 linux, such as Ubuntu or Debian, and Python 3.8, 3.9, and 3.10."
        },
        {
            "author": "chaojie",
            "title": "ComfyUI-MotionCtrl-SVD",
            "id": "motionctrl-svd",
            "reference": "https://github.com/chaojie/ComfyUI-MotionCtrl-SVD",
            "files": [
                "https://github.com/chaojie/ComfyUI-MotionCtrl-SVD"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Download the weights of MotionCtrl-SVD [a/motionctrl_svd.ckpt](https://huggingface.co/TencentARC/MotionCtrl/blob/main/motionctrl_svd.ckpt) and put it to ComfyUI/models/checkpoints"
        },
        {
            "author": "chaojie",
            "title": "ComfyUI-DragAnything",
            "id": "draganything",
            "reference": "https://github.com/chaojie/ComfyUI-DragAnything",
            "files": [
                "https://github.com/chaojie/ComfyUI-DragAnything"
            ],
            "install_type": "git-clone",
            "description": "DragAnything"
        },
        {
            "author": "chaojie",
            "title": "ComfyUI-DragNUWA",
            "id": "dragnuwa",
            "reference": "https://github.com/chaojie/ComfyUI-DragNUWA",
            "files": [
                "https://github.com/chaojie/ComfyUI-DragNUWA"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Download the weights of DragNUWA [a/drag_nuwa_svd.pth](https://drive.google.com/file/d/1Z4JOley0SJCb35kFF4PCc6N6P1ftfX4i/view) and put it to ComfyUI/models/checkpoints/drag_nuwa_svd.pth\n[w/Due to changes in the torch package and versions of many other packages, it may disrupt your installation environment.]"
        },
        {
            "author": "chaojie",
            "title": "ComfyUI-Moore-AnimateAnyone",
            "id": "moore-animateanyone",
            "reference": "https://github.com/chaojie/ComfyUI-Moore-AnimateAnyone",
            "files": [
                "https://github.com/chaojie/ComfyUI-Moore-AnimateAnyone"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Run python tools/download_weights.py first to download weights automatically"
        },
        {
            "author": "chaojie",
            "title": "ComfyUI-I2VGEN-XL",
            "id": "i2vgen-xl",
            "reference": "https://github.com/chaojie/ComfyUI-I2VGEN-XL",
            "files": [
                "https://github.com/chaojie/ComfyUI-I2VGEN-XL"
            ],
            "install_type": "git-clone",
            "description": "This is an implementation of [a/i2vgen-xl](https://github.com/ali-vilab/i2vgen-xl)"
        },
        {
            "author": "chaojie",
            "title": "ComfyUI-LightGlue",
            "id": "lightglue",
            "reference": "https://github.com/chaojie/ComfyUI-LightGlue",
            "files": [
                "https://github.com/chaojie/ComfyUI-LightGlue"
            ],
            "install_type": "git-clone",
            "description": "This is an ComfyUI implementation of LightGlue to generate motion brush"
        },
        {
            "author": "chaojie",
            "title": "ComfyUI-RAFT",
            "id": "raft",
            "reference": "https://github.com/chaojie/ComfyUI-RAFT",
            "files": [
                "https://github.com/chaojie/ComfyUI-RAFT"
            ],
            "install_type": "git-clone",
            "description": "This is an ComfyUI implementation of RAFT to generate motion brush"
        },
        {
            "author": "chaojie",
            "title": "ComfyUI-LaVIT",
            "id": "lavit",
            "reference": "https://github.com/chaojie/ComfyUI-LaVIT",
            "files": [
                "https://github.com/chaojie/ComfyUI-LaVIT"
            ],
            "install_type": "git-clone",
            "description": "Nodes:VideoLaVITLoader, VideoLaVITT2V, VideoLaVITI2V, VideoLaVITI2VLong, VideoLaVITT2VLong, VideoLaVITI2I"
        },
        {
            "author": "chaojie",
            "title": "ComfyUI-SimDA",
            "id": "simda",
            "reference": "https://github.com/chaojie/ComfyUI-SimDA",
            "files": [
                "https://github.com/chaojie/ComfyUI-SimDA"
            ],
            "install_type": "git-clone",
            "description": "Nodes:SimDATrain, SimDALoader, SimDARun, VHS_FILENAMES_STRING_SimDA"
        },
        {
            "author": "chaojie",
            "title": "ComfyUI-Video-Editing-X-Attention",
            "id": "video-editing-x-attention",
            "reference": "https://github.com/chaojie/ComfyUI-Video-Editing-X-Attention",
            "files": [
                "https://github.com/chaojie/ComfyUI-Video-Editing-X-Attention"
            ],
            "install_type": "git-clone",
            "description": "Investigating the Effectiveness of Cross Attention to Unlock Zero-Shot Editing of Text-to-Video Diffusion Models"
        },
        {
            "author": "alexopus",
            "title": "ComfyUI Image Saver",
            "id": "image-saver",
            "reference": "https://github.com/alexopus/ComfyUI-Image-Saver",
            "files": [
                "https://github.com/alexopus/ComfyUI-Image-Saver"
            ],
            "install_type": "git-clone",
            "description": "Allows you to save images with their generation metadata compatible with Civitai. Works with png, jpeg and webp. Stores LoRAs, models and embeddings hashes for resource recognition."
        },
        {
            "author": "kft334",
            "title": "Knodes",
            "id": "knodes",
            "reference": "https://github.com/kft334/Knodes",
            "files": [
                "https://github.com/kft334/Knodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Image(s) To Websocket (Base64), Load Image (Base64),Load Images (Base64)"
        },
        {
            "author": "MrForExample",
            "title": "ComfyUI-3D-Pack",
            "id": "3dpack",
            "reference": "https://github.com/MrForExample/ComfyUI-3D-Pack",
            "files": [
                "https://github.com/MrForExample/ComfyUI-3D-Pack"
            ],
            "nodename_pattern": "^\\[Comfy3D\\]",
            "install_type": "git-clone",
            "description": "An extensive node suite that enables ComfyUI to process 3D inputs (Mesh & UV Texture, etc) using cutting edge algorithms (3DGS, NeRF, etc.)\nNOTE: Pre-built python wheels can be download from [a/https://github.com/remsky/ComfyUI3D-Assorted-Wheels](https://github.com/remsky/ComfyUI3D-Assorted-Wheels)"
        },
        {
            "author": "Mr.ForExample",
            "title": "ComfyUI-AnimateAnyone-Evolved",
            "id": "animateanyone-evolved",
            "reference": "https://github.com/MrForExample/ComfyUI-AnimateAnyone-Evolved",
            "files": [
                "https://github.com/MrForExample/ComfyUI-AnimateAnyone-Evolved"
            ],
            "nodename_pattern": "^\\[AnimateAnyone\\]",
            "install_type": "git-clone",
            "description": "Improved AnimateAnyone implementation that allows you to use the opse image sequence and reference image to generate stylized video.\nThe current goal of this project is to achieve desired pose2video result with 1+FPS on GPUs that are equal to or better than RTX 3080!🚀\n[w/The torch environment may be compromised due to version issues as some torch-related packages are being reinstalled.]"
        },
        {
            "author": "Hangover3832",
            "title": "ComfyUI-Hangover-Nodes",
            "reference": "https://github.com/Hangover3832/ComfyUI-Hangover-Nodes",
            "files": [
                "https://github.com/Hangover3832/ComfyUI-Hangover-Nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes: MS kosmos-2 Interrogator, Save Image w/o Metadata, Image Scale Bounding Box. An implementation of Microsoft [a/kosmos-2](https://huggingface.co/microsoft/kosmos-2-patch14-224) image to text transformer."
        },
        {
            "author": "Hangover3832",
            "title": "ComfyUI-Hangover-Moondream",
            "reference": "https://github.com/Hangover3832/ComfyUI-Hangover-Moondream",
            "files": [
                "https://github.com/Hangover3832/ComfyUI-Hangover-Moondream"
            ],
            "install_type": "git-clone",
            "description": "Moondream is a lightweight multimodal large language model.\n[w/WARN:Additional python code will be downloaded from huggingface and executed. You have to trust this creator if you want to use this node!]"
        },
        {
            "author": "Hangover3832",
            "title": "Recognize Anything Model (RAM) for ComfyUI",
            "reference": "https://github.com/Hangover3832/ComfyUI-Hangover-Recognize_Anything",
            "files": [
                "https://github.com/Hangover3832/ComfyUI-Hangover-Recognize_Anything"
            ],
            "install_type": "git-clone",
            "description": "This is an image recognition node for ComfyUI based on the RAM++ model from [a/xinyu1205](https://huggingface.co/xinyu1205).\nThis node outputs a string of tags with all the recognized objects and elements in the image in English or Chinese language.\nFor image tagging and captioning."
        },
        {
            "author": "tzwm",
            "title": "ComfyUI Profiler",
            "reference": "https://github.com/tzwm/comfyui-profiler",
            "files": [
                "https://github.com/tzwm/comfyui-profiler"
            ],
            "install_type": "git-clone",
            "description": "Calculate the execution time of all nodes."
        },
        {
            "author": "Daniel Lewis",
            "title": "ComfyUI-Llama",
            "reference": "https://github.com/daniel-lewis-ab/ComfyUI-Llama",
            "files": [
                "https://github.com/daniel-lewis-ab/ComfyUI-Llama"
            ],
            "install_type": "git-clone",
            "description": "This is a set of nodes to interact with llama-cpp-python"
        },
        {
            "author": "Daniel Lewis",
            "title": "ComfyUI-TTS",
            "reference": "https://github.com/daniel-lewis-ab/ComfyUI-TTS",
            "files": [
                "https://github.com/daniel-lewis-ab/ComfyUI-TTS"
            ],
            "install_type": "git-clone",
            "description": "Text To Speech (TTS) for ComfyUI"
        },
        {
            "author": "djbielejeski",
            "title": "a-person-mask-generator",
            "reference": "https://github.com/djbielejeski/a-person-mask-generator",
            "files": [
                "https://github.com/djbielejeski/a-person-mask-generator"
            ],
            "install_type": "git-clone",
            "description": "Extension for Automatic1111 and ComfyUI to automatically create masks for Background/Hair/Body/Face/Clothes in Img2Img"
        },
        {
            "author": "smagnetize",
            "title": "kb-comfyui-nodes",
            "reference": "https://github.com/smagnetize/kb-comfyui-nodes",
            "files": [
                "https://github.com/smagnetize/kb-comfyui-nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes:SingleImageDataUrlLoader"
        },
        {
            "author": "ginlov",
            "title": "segment_to_mask_comfyui",
            "reference": "https://github.com/ginlov/segment_to_mask_comfyui",
            "files": [
                "https://github.com/ginlov/segment_to_mask_comfyui"
            ],
            "install_type": "git-clone",
            "description": "Nodes:SegToMask"
        },
        {
            "author": "glowcone",
            "title": "Load Image From Base64 URI",
            "reference": "https://github.com/glowcone/comfyui-base64-to-image",
            "files": [
                "https://github.com/glowcone/comfyui-base64-to-image"
            ],
            "install_type": "git-clone",
            "description": "Nodes: LoadImageFromBase64. Loads an image and its transparency mask from a base64-encoded data URI for easy API connection."
        },
        {
            "author": "AInseven",
            "title": "ComfyUI-fastblend",
            "reference": "https://github.com/AInseven/ComfyUI-fastblend",
            "files": [
                "https://github.com/AInseven/ComfyUI-fastblend"
            ],
            "install_type": "git-clone",
            "description": "fastblend for comfyui, and other nodes that I write for video2video. rebatch image, my openpose"
        },
        {
            "author": "HebelHuber",
            "title": "comfyui-enhanced-save-node",
            "reference": "https://github.com/HebelHuber/comfyui-enhanced-save-node",
            "files": [
                "https://github.com/HebelHuber/comfyui-enhanced-save-node"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Enhanced Save Node"
        },
        {
            "author": "LarryJane491",
            "title": "Lora-Training-in-Comfy",
            "reference": "https://github.com/LarryJane491/Lora-Training-in-Comfy",
            "files": [
                "https://github.com/LarryJane491/Lora-Training-in-Comfy"
            ],
            "install_type": "git-clone",
            "description": "If you see this message, your ComfyUI-Manager is outdated.\nRecent channel provides only the list of the latest nodes. If you want to find the complete node list, please go to the Default channel.\nMaking LoRA has never been easier!"
        },
        {
            "author": "LarryJane491",
            "title": "Image-Captioning-in-ComfyUI",
            "reference": "https://github.com/LarryJane491/Image-Captioning-in-ComfyUI",
            "files": [
                "https://github.com/LarryJane491/Image-Captioning-in-ComfyUI"
            ],
            "install_type": "git-clone",
            "description": "The LoRA Caption custom nodes, just like their name suggests, allow you to caption images so they are ready for LoRA training."
        },
        {
            "author": "Layer-norm",
            "title": "Comfyui lama remover",
            "reference": "https://github.com/Layer-norm/comfyui-lama-remover",
            "files": [
                "https://github.com/Layer-norm/comfyui-lama-remover"
            ],
            "install_type": "git-clone",
            "description": "A very simple ComfyUI node to remove item with mask."
        },
        {
            "author": "Taremin",
            "title": "ComfyUI Prompt ExtraNetworks",
            "reference": "https://github.com/Taremin/comfyui-prompt-extranetworks",
            "files": [
                "https://github.com/Taremin/comfyui-prompt-extranetworks"
            ],
            "install_type": "git-clone",
            "description": "Instead of LoraLoader or HypernetworkLoader, it receives a prompt and loads and applies LoRA or HN based on the specifications within the prompt. The main purpose of this custom node is to allow changes without reconnecting the LoraLoader node when the prompt is randomly altered, etc."
        },
        {
            "author": "Taremin",
            "title": "ComfyUI String Tools",
            "reference": "https://github.com/Taremin/comfyui-string-tools",
            "files": [
                "https://github.com/Taremin/comfyui-string-tools"
            ],
            "install_type": "git-clone",
            "description": " This extension provides the StringToolsConcat node, which concatenates multiple texts, and the StringToolsRandomChoice node, which selects one randomly from multiple texts."
        },
        {
            "author": "Taremin",
            "title": "WebUI Monaco Prompt",
            "reference": "https://github.com/Taremin/webui-monaco-prompt",
            "files": [
                "https://github.com/Taremin/webui-monaco-prompt"
            ],
            "install_type": "git-clone",
            "description": "Make it possible to edit the prompt using the Monaco Editor, an editor implementation used in VSCode.\nNOTE: This extension supports both ComfyUI and A1111 simultaneously."
        },
        {
            "author": "foxtrot-roger",
            "title": "RF Nodes",
            "reference": "https://github.com/foxtrot-roger/comfyui-rf-nodes",
            "files": [
                "https://github.com/foxtrot-roger/comfyui-rf-nodes"
            ],
            "install_type": "git-clone",
            "description": "A bunch of nodes that can be useful to manipulate primitive types (numbers, text, ...) Also some helpers to generate text and timestamps."
        },
        {
            "author": "abyz22",
            "title": "image_control",
            "reference": "https://github.com/abyz22/image_control",
            "files": [
                "https://github.com/abyz22/image_control"
            ],
            "install_type": "git-clone",
            "description": "Nodes:abyz22_Padding Image, abyz22_ImpactWildcardEncode, abyz22_setimageinfo, abyz22_SaveImage, abyz22_ImpactWildcardEncode_GetPrompt, abyz22_SetQueue, abyz22_drawmask, abyz22_FirstNonNull, abyz22_blendimages, abyz22_blend_onecolor. Please check workflow in [a/https://github.com/abyz22/image_control](https://github.com/abyz22/image_control)"
        },
        {
            "author": "HAL41",
            "title": "ComfyUI aichemy nodes",
            "reference": "https://github.com/HAL41/ComfyUI-aichemy-nodes",
            "files": [
                "https://github.com/HAL41/ComfyUI-aichemy-nodes"
            ],
            "install_type": "git-clone",
            "description": "Simple node to handle scaling of YOLOv8 segmentation masks"
        },
        {
            "author": "nkchocoai",
            "title": "ComfyUI-SizeFromPresets",
            "reference": "https://github.com/nkchocoai/ComfyUI-SizeFromPresets",
            "files": [
                "https://github.com/nkchocoai/ComfyUI-SizeFromPresets"
            ],
            "install_type": "git-clone",
            "description": "Add a node that outputs width and height of the size selected from the preset (.csv)."
        },
        {
            "author": "nkchocoai",
            "title": "ComfyUI-PromptUtilities",
            "reference": "https://github.com/nkchocoai/ComfyUI-PromptUtilities",
            "files": [
                "https://github.com/nkchocoai/ComfyUI-PromptUtilities"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Format String, Join String List, Load Preset, Load Preset (Advanced), Const String, Const String (multi line). Add useful nodes related to prompt."
        },
        {
            "author": "nkchocoai",
            "title": "ComfyUI-TextOnSegs",
            "reference": "https://github.com/nkchocoai/ComfyUI-TextOnSegs",
            "files": [
                "https://github.com/nkchocoai/ComfyUI-TextOnSegs"
            ],
            "install_type": "git-clone",
            "description": "Add a node for drawing text with CR Draw Text of ComfyUI_Comfyroll_CustomNodes to the area of SEGS detected by Ultralytics Detector of ComfyUI-Impact-Pack."
        },
        {
            "author": "nkchocoai",
            "title": "ComfyUI-SaveImageWithMetaData",
            "reference": "https://github.com/nkchocoai/ComfyUI-SaveImageWithMetaData",
            "files": [
                "https://github.com/nkchocoai/ComfyUI-SaveImageWithMetaData"
            ],
            "install_type": "git-clone",
            "description": "Add a node to save images with metadata (PNGInfo) extracted from the input values of each node.\nSince the values are extracted dynamically, values output by various extension nodes can be added to metadata."
        },
        {
            "author": "nkchocoai",
            "title": "ComfyUI-Dart",
            "id": "dart",
            "reference": "https://github.com/nkchocoai/ComfyUI-Dart",
            "files": [
                "https://github.com/nkchocoai/ComfyUI-Dart"
            ],
            "install_type": "git-clone",
            "description": "Add nodes that generates danbooru tags by [a/Dart(Danbooru Tags Transformer)](https://huggingface.co/p1atdev/dart-v1-sft)."
        },
        {
            "author": "JaredTherriault",
            "title": "ComfyUI-JNodes",
            "id": "jnodes",
            "reference": "https://github.com/JaredTherriault/ComfyUI-JNodes",
            "files": [
                "https://github.com/JaredTherriault/ComfyUI-JNodes"
            ],
            "install_type": "git-clone",
            "description": "python and web UX improvements for ComfyUI.\n[w/'DynamicPrompts.js' and 'EditAttention.js' from the core, along with 'ImageFeed.js' and 'favicon.js' from the custom scripts of pythongosssss, are not compatible. Therefore, manual deletion of these files is required to use this web extension.]"
        },
        {
            "author": "prozacgod",
            "title": "ComfyUI Multi-Workspace",
            "id": "multi-workspace",
            "reference": "https://github.com/prozacgod/comfyui-pzc-multiworkspace",
            "files": [
                "https://github.com/prozacgod/comfyui-pzc-multiworkspace"
            ],
            "install_type": "git-clone",
            "description": "A simple, quick, and dirty implementation of multiple workspaces within ComfyUI."
        },
        {
            "author": "Siberpone",
            "title": "Lazy Pony Prompter",
            "id": "lazy-pony-prompter",
            "reference": "https://github.com/Siberpone/lazy-pony-prompter",
            "files": [
                "https://github.com/Siberpone/lazy-pony-prompter"
            ],
            "install_type": "git-clone",
            "description": "A pony prompt helper extension for AUTOMATIC1111's Stable Diffusion Web UI and ComfyUI that utilizes the full power of your favorite booru query syntax. Currently supports [a/Derpibooru](https://derpibooru/org) and [a/E621](https://e621.net/)."
        },
        {
            "author": "dave-palt",
            "title": "comfyui_DSP_imagehelpers",
            "id": "dsp-imagehelpers",
            "reference": "https://github.com/dave-palt/comfyui_DSP_imagehelpers",
            "files": [
                "https://github.com/dave-palt/comfyui_DSP_imagehelpers"
            ],
            "install_type": "git-clone",
            "description": "Nodes: DSP Image Concat"
        },
        {
            "author": "Inzaniak",
            "title": "Ranbooru for ComfyUI",
            "id": "ranbooru",
            "reference": "https://github.com/Inzaniak/comfyui-ranbooru",
            "files": [
                "https://github.com/Inzaniak/comfyui-ranbooru"
            ],
            "install_type": "git-clone",
            "description": "Ranbooru is an extension for the comfyUI. The purpose of this extension is to add a node that gets a random set of tags from boorus pictures. This is mostly being used to help me test my checkpoints on a large variety of"
        },
        {
            "author": "miosp",
            "title": "ComfyUI-FBCNN",
            "id": "fbcnn",
            "reference": "https://github.com/Miosp/ComfyUI-FBCNN",
            "files": [
                "https://github.com/Miosp/ComfyUI-FBCNN"
            ],
            "install_type": "git-clone",
            "description": "A node for JPEG de-artifacting using [a/FBCNN](https://github.com/jiaxi-jiang/FBCNN)."
        },
        {
            "author": "JcandZero",
            "title": "ComfyUI_GLM4Node",
            "id": "glm4node",
            "reference": "https://github.com/JcandZero/ComfyUI_GLM4Node",
            "files": [
                "https://github.com/JcandZero/ComfyUI_GLM4Node"
            ],
            "install_type": "git-clone",
            "description": "GLM4 Vision Integration"
        },
        {
            "author": "darkpixel",
            "title": "DarkPrompts",
            "id": "darkprompts",
            "reference": "https://github.com/darkpixel/darkprompts",
            "files": [
                "https://github.com/darkpixel/darkprompts"
            ],
            "install_type": "git-clone",
            "description": "Slightly better random prompt generation tools that allow combining and picking prompts from both file and text input sources."
        },
        {
            "author": "shiimizu",
            "title": "ComfyUI PhotoMaker Plus",
            "id": "photomaker-plus",
            "reference": "https://github.com/shiimizu/ComfyUI-PhotoMaker-Plus",
            "files": [
                "https://github.com/shiimizu/ComfyUI-PhotoMaker-Plus"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI reference implementation for [a/PhotoMaker](https://github.com/TencentARC/PhotoMaker) models. [w/WARN:The repository name has been changed. For those who have previously installed it, please delete custom_nodes/ComfyUI-PhotoMaker from disk and reinstall this.]"
        },
        {
            "author": "yytdfc",
            "title": "Amazon Bedrock nodes for ComfyUI",
            "id": "bedrock",
            "reference": "https://github.com/aws-samples/comfyui-llm-node-for-amazon-bedrock",
            "files": [
                "https://github.com/aws-samples/comfyui-llm-node-for-amazon-bedrock"
            ],
            "pip": ["boto3"],
            "install_type": "git-clone",
            "description": "Amazon Bedrock is a fully managed service that offers a choice of high-performing foundation models (FMs) from leading AI companies. This repo is the ComfyUI nodes for Bedrock service. You could invoke the foundation model in your ComfyUI pipeline."
        },
        {
            "author": "Qais Malkawi",
            "title": "ComfyUI-Qais-Helper",
            "id": "qais-helper",
            "reference": "https://github.com/QaisMalkawi/ComfyUI-QaisHelper",
            "files": [
                "https://github.com/QaisMalkawi/ComfyUI-QaisHelper"
            ],
            "install_type": "git-clone",
            "description": "This Extension adds a few custom QOL nodes that ComfyUI lacks by default."
        },
        {
            "author": "longgui0318",
            "title": "comfyui-mask-util",
            "id": "mask-util",
            "reference": "https://github.com/longgui0318/comfyui-mask-util",
            "files": [
                "https://github.com/longgui0318/comfyui-mask-util"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Split Masks, Mask Selection Of Masks, Mask Region Info"
        },
        {
            "author": "longgui0318",
            "title": "comfyui-llm-assistant",
            "id": "llm-assistant",
            "reference": "https://github.com/longgui0318/comfyui-llm-assistant",
            "files": [
                "https://github.com/longgui0318/comfyui-llm-assistant"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Generate Stable Diffsution Prompt With LLM, Translate Text With LLM, Chat With LLM"
        },
        {
            "author": "longgui0318",
            "title": "comfyui-oms-diffusion",
            "id": "oms-diffusion",
            "reference": "https://github.com/longgui0318/comfyui-oms-diffusion",
            "files": [
                "https://github.com/longgui0318/comfyui-oms-diffusion"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Extract Features With Unet, Additional Features With Attention"
        },
        {
            "author": "longgui0318",
            "title": "comfyui-magic-clothing",
            "id": "magic-clothing",
            "reference": "https://github.com/longgui0318/comfyui-magic-clothing",
            "files": [
                "https://github.com/longgui0318/comfyui-magic-clothing"
            ],
            "install_type": "git-clone",
            "description": "The comfyui supported version of the [a/Magic Clothing](https://github.com/ShineChen1024/MagicClothing) project, not the diffusers version, allows direct integration with modules such as ipadapter"
        },
        {
            "author": "DimaChaichan",
            "title": "LAizypainter-Exporter-ComfyUI",
            "reference": "https://github.com/DimaChaichan/LAizypainter-Exporter-ComfyUI",
            "files": [
                "https://github.com/DimaChaichan/LAizypainter-Exporter-ComfyUI"
            ],
            "install_type": "git-clone",
            "description": "This exporter is a plugin for ComfyUI, which can export tasks for [a/LAizypainter](https://github.com/DimaChaichan/LAizypainter).\nLAizypainter is a Photoshop plugin with which you can send tasks directly to a Stable Diffusion server. More information about a [a/Task](https://github.com/DimaChaichan/LAizypainter?tab=readme-ov-file#task)"
        },
        {
            "author": "adriflex",
            "title": "ComfyUI_Blender_Texdiff",
            "id": "blender-texdiff",
            "reference": "https://github.com/adriflex/ComfyUI_Blender_Texdiff",
            "files": [
                "https://github.com/adriflex/ComfyUI_Blender_Texdiff"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Blender viewport color, Blender Viewport depth"
        },
        {
            "author": "Shraknard",
            "title": "ComfyUI-Remover",
            "id": "remover",
            "reference": "https://github.com/Shraknard/ComfyUI-Remover",
            "files": [
                "https://github.com/Shraknard/ComfyUI-Remover"
            ],
            "install_type": "git-clone",
            "description": "Custom node for ComfyUI that makes parts of the image transparent (face, background...)"
        },
        {
            "author": "FlyingFireCo",
            "title": "tiled_ksampler",
            "reference": "https://github.com/FlyingFireCo/tiled_ksampler",
            "files": [
                "https://github.com/FlyingFireCo/tiled_ksampler"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Tiled KSampler, Asymmetric Tiled KSampler, Circular VAEDecode."
        },
        {
            "author": "Nlar",
            "title": "ComfyUI_CartoonSegmentation",
            "id": "cartoon-seg",
            "reference": "https://github.com/Nlar/ComfyUI_CartoonSegmentation",
            "files": [
                "https://github.com/Nlar/ComfyUI_CartoonSegmentation"
            ],
            "install_type": "git-clone",
            "description": "Front end ComfyUI nodes for CartoonSegmentation Based upon the work of the CartoonSegmentation repository this project will provide a front end to some of the features."
        },
        {
            "author": "godspede",
            "title": "ComfyUI Substring",
            "id": "substring",
            "reference": "https://github.com/godspede/ComfyUI_Substring",
            "files": [
                "https://github.com/godspede/ComfyUI_Substring"
            ],
            "install_type": "git-clone",
            "description": "Just a simple substring node that takes text and length as input, and outputs the first length characters."
        },
        {
            "author": "gokayfem",
            "title": "VLM_nodes",
            "id": "vlm",
            "reference": "https://github.com/gokayfem/ComfyUI_VLM_nodes",
            "files": [
                "https://github.com/gokayfem/ComfyUI_VLM_nodes"
            ],
            "install_type": "git-clone",
            "description": "Custom Nodes for Vision Language Models (VLM) , Large Language Models (LLM), Image Captioning, Automatic Prompt Generation, Creative and Consistent Prompt Suggestion, Keyword Extraction"
        },
        {
            "author": "gokayfem",
            "title": "ComfyUI-Dream-Interpreter",
            "id": "dream-interpreter",
            "reference": "https://github.com/gokayfem/ComfyUI-Dream-Interpreter",
            "files": [
                "https://github.com/gokayfem/ComfyUI-Dream-Interpreter"
            ],
            "install_type": "git-clone",
            "description": "Tell your dream and it interprets it and puts you inside your dream"
        },
        {
            "author": "gokayfem",
            "title": "ComfyUI-Depth-Visualization",
            "id": "delpth-visualization",
            "reference": "https://github.com/gokayfem/ComfyUI-Depth-Visualization",
            "files": [
                "https://github.com/gokayfem/ComfyUI-Depth-Visualization"
            ],
            "install_type": "git-clone",
            "description": "Works with any Depth Map and visualizes the applied version it inside ComfyUI"
        },
        {
            "author": "gokayfem",
            "title": "ComfyUI-Texture-Simple",
            "id": "texture-simple",
            "reference": "https://github.com/gokayfem/ComfyUI-Texture-Simple",
            "files": [
                "https://github.com/gokayfem/ComfyUI-Texture-Simple"
            ],
            "install_type": "git-clone",
            "description": "Visualize your textures inside ComfyUI"
        },
        {
            "author": "Hiero207",
            "title": "Hiero-Nodes",
            "id": "hiero",
            "reference": "https://github.com/Hiero207/ComfyUI-Hiero-Nodes",
            "files": [
                "https://github.com/Hiero207/ComfyUI-Hiero-Nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Post to Discord w/ Webhook"
        },
        {
            "author": "azure-dragon-ai",
            "title": "ComfyUI-ClipScore-Nodes",
            "id": "clipscore",
            "reference": "https://github.com/azure-dragon-ai/ComfyUI-ClipScore-Nodes",
            "files": [
                "https://github.com/azure-dragon-ai/ComfyUI-ClipScore-Nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes:ImageScore, Loader, Image Processor, Real Image Processor, Fake Image Processor, Text Processor. ComfyUI Nodes for ClipScore"
        },
        {
            "author": "yuvraj108c",
            "title": "ComfyUI Whisper",
            "id": "whisper",
            "reference": "https://github.com/yuvraj108c/ComfyUI-Whisper",
            "files": [
                "https://github.com/yuvraj108c/ComfyUI-Whisper"
            ],
            "install_type": "git-clone",
            "description": "Transcribe audio and add subtitles to videos using Whisper in ComfyUI"
        },
        {
            "author": "yuvraj108c",
            "title": "ComfyUI-Pronodes",
            "id": "pronodes",
            "reference": "https://github.com/yuvraj108c/ComfyUI-Pronodes",
            "files": [
                "https://github.com/yuvraj108c/ComfyUI-Pronodes"
            ],
            "install_type": "git-clone",
            "description": "A collection of nice utility nodes for ComfyUI"
        },
        {
            "author": "yuvraj108c",
            "title": "ComfyUI-Vsgan",
            "id": "vsgan",
            "reference": "https://github.com/yuvraj108c/ComfyUI-Vsgan",
            "files": [
                "https://github.com/yuvraj108c/ComfyUI-Vsgan"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Upscale Video Tensorrt"
        },
        {
            "author": "yuvraj108c",
            "title": "ComfyUI Depth Anything TensorRT",
            "id": "depth-anything-tensorrt",
            "reference": "https://github.com/yuvraj108c/ComfyUI-Depth-Anything-Tensorrt",
            "files": [
                "https://github.com/yuvraj108c/ComfyUI-Depth-Anything-Tensorrt"
            ],
            "install_type": "git-clone",
            "description": "This extension provides a ComfyUI Custom Node implementation of the [a/Depth-Anything-Tensorrt](https://github.com/spacewalk01/depth-anything-tensorrt) in Python for ultra fast depth map generation"
        },
        {
            "author": "yuvraj108c",
            "title": "ComfyUI PiperTTS",
            "id": "pipertts",
            "reference": "https://github.com/yuvraj108c/ComfyUI-PiperTTS",
            "files": [
                "https://github.com/yuvraj108c/ComfyUI-PiperTTS"
            ],
            "install_type": "git-clone",
            "description": "Convert Text-to-Speech inside ComfyUI using [a/Piper](https://github.com/rhasspy/piper)"
        },
        {
            "author": "yuvraj108c",
            "title": "ComfyUI Upscaler TensorRT",
            "id": "upscaler-tensorrt",
            "reference": "https://github.com/yuvraj108c/ComfyUI-Upscaler-Tensorrt",
            "files": [
                "https://github.com/yuvraj108c/ComfyUI-Upscaler-Tensorrt"
            ],
            "install_type": "git-clone",
            "description": "This project provides a Tensorrt implementation for fast image upscaling inside ComfyUI (3-4x faster)"
        },
        {
            "author": "blepping",
            "title": "ComfyUI-bleh",
            "id": "bleh",
            "reference": "https://github.com/blepping/ComfyUI-bleh",
            "files": [
                "https://github.com/blepping/ComfyUI-bleh"
            ],
            "install_type": "git-clone",
            "description": "Better TAESD previews, BlehHyperTile."
        },
        {
            "author": "blepping",
            "title": "ComfyUI-sonar",
            "id": "sonar",
            "reference": "https://github.com/blepping/ComfyUI-sonar",
            "files": [
                "https://github.com/blepping/ComfyUI-sonar"
            ],
            "install_type": "git-clone",
            "description": "A janky implementation of Sonar sampling (momentum-based sampling) for ComfyUI."
        },
        {
            "author": "blepping",
            "title": "ComfyUI jank HiDiffusion",
            "id": "jank-hidiffusion",
            "reference": "https://github.com/blepping/comfyui_jankhidiffusion",
            "files": [
                "https://github.com/blepping/comfyui_jankhidiffusion"
            ],
            "install_type": "git-clone",
            "description": "Janky experimental attempt at implementing [a/HiDiffusion](https://github.com/megvii-research/HiDiffusion) for ComfyUI."
        },
        {
            "author": "JerryOrbachJr",
            "title": "Random Size",
            "reference": "https://github.com/JerryOrbachJr/ComfyUI-RandomSize",
            "files": [
                "https://github.com/JerryOrbachJr/ComfyUI-RandomSize"
            ],
            "install_type": "git-clone",
            "description": "A ComfyUI custom node that randomly selects a height and width pair from a list in a config file"
        },
        {
            "author": "jamal-alkharrat",
            "title": "ComfyUI_rotate_image",
            "reference": "https://github.com/jamal-alkharrat/ComfyUI_rotate_image",
            "files": [
                "https://github.com/jamal-alkharrat/ComfyUI_rotate_image"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI Custom Node to Rotate Images, Img2Img node."
        },
        {
            "author": "mape",
            "title": "mape's helpers",
            "id": "mape-helpers",
            "reference": "https://github.com/mape/ComfyUI-mape-Helpers",
            "files": [
                "https://github.com/mape/ComfyUI-mape-Helpers"
            ],
            "install_type": "git-clone",
            "description": "Multi-monitor image preview, Variable Assigment/Wireless Nodes, Prompt Tweaking, Command Palette, Pinned favourite nodes, Node navigation, Fuzzy search, Node time tracking, Organizing and Error management. For more info visit: [a/https://comfyui.ma.pe/](https://comfyui.ma.pe/)"
        },
        {
            "author": "zhongpei",
            "title": "Comfyui_image2prompt",
            "id": "img2prompt",
            "reference": "https://github.com/zhongpei/Comfyui_image2prompt",
            "files": [
                "https://github.com/zhongpei/Comfyui_image2prompt"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Image to Text, Loader Image to Text Model."
        },
        {
            "author": "zhongpei",
            "title": "ComfyUI for InstructIR",
            "id": "instructir",
            "reference": "https://github.com/zhongpei/ComfyUI-InstructIR",
            "files": [
                "https://github.com/zhongpei/ComfyUI-InstructIR"
            ],
            "install_type": "git-clone",
            "description": "Enhancing Image Restoration. (ref:[a/InstructIR](https://github.com/mv-lab/InstructIR))"
        },
        {
            "author": "Loewen-Hob",
            "title": "Rembg Background Removal Node for ComfyUI",
            "id": "rembg",
            "reference": "https://github.com/Loewen-Hob/rembg-comfyui-node-better",
            "files": [
                "https://github.com/Loewen-Hob/rembg-comfyui-node-better"
            ],
            "install_type": "git-clone",
            "description": "This custom node is based on the [a/rembg-comfyui-node](https://github.com/Jcd1230/rembg-comfyui-node) but provides additional functionality to select ONNX models."
        },
        {
            "author": "HaydenReeve",
            "title": "ComfyUI Better Strings",
            "id": "better-string",
            "reference": "https://github.com/HaydenReeve/ComfyUI-Better-Strings",
            "files": [
                "https://github.com/HaydenReeve/ComfyUI-Better-Strings"
            ],
            "install_type": "git-clone",
            "description": "Strings should be easy, and simple. This extension aims to provide a set of nodes that make working with strings in ComfyUI a little bit easier."
        },
        {
            "author": "StartHua",
            "title": "ComfyUI_Seg_VITON",
            "id": "seg-viton",
            "reference": "https://github.com/StartHua/ComfyUI_Seg_VITON",
            "files": [
                "https://github.com/StartHua/ComfyUI_Seg_VITON"
            ],
            "install_type": "git-clone",
            "description": "Nodes:segformer_clothes, segformer_agnostic, segformer_remove_bg, stabel_vition. Nodes for model dress up."
        },
        {
            "author": "StartHua",
            "title": "Comfyui_joytag",
            "id": "joytag",
            "reference": "https://github.com/StartHua/Comfyui_joytag",
            "files": [
                "https://github.com/StartHua/Comfyui_joytag"
            ],
            "install_type": "git-clone",
            "description": "JoyTag is a state of the art AI vision model for tagging images, with a focus on sex positivity and inclusivity. It uses the Danbooru tagging schema, but works across a wide range of images, from hand drawn to photographic.\nDownload the weight and put it under checkpoints: [a/https://huggingface.co/fancyfeast/joytag/tree/main](https://huggingface.co/fancyfeast/joytag/tree/main)"
        },
        {
            "author": "StartHua",
            "title": "comfyui_segformer_b2_clothes",
            "id": "segformer-b2-clothes",
            "reference": "https://github.com/StartHua/Comfyui_segformer_b2_clothes",
            "files": [
                "https://github.com/StartHua/Comfyui_segformer_b2_clothes"
            ],
            "install_type": "git-clone",
            "description": "SegFormer model fine-tuned on ATR dataset for clothes segmentation but can also be used for human segmentation!\nDownload the weight and put it under checkpoints: [a/https://huggingface.co/mattmdjaga/segformer_b2_clothes](https://huggingface.co/mattmdjaga/segformer_b2_clothes)"
        },
        {
            "author": "StartHua",
            "title": "ComfyUI_OOTDiffusion_CXH",
            "id": "ootdiffusion-cxh",
            "reference": "https://github.com/StartHua/ComfyUI_OOTDiffusion_CXH",
            "files": [
                "https://github.com/StartHua/ComfyUI_OOTDiffusion_CXH"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Ood_hd_CXH, Ood_hd_CXH. [a/OOTDiffusion](https://github.com/levihsu/OOTDiffusion)"
        },
        {
            "author": "StartHua",
            "title": "ComfyUI_PCDMs",
            "id": "pcdms",
            "reference": "https://github.com/StartHua/ComfyUI_PCDMs",
            "files": [
                "https://github.com/StartHua/ComfyUI_PCDMs"
            ],
            "install_type": "git-clone",
            "description": "Original project: [a/link](https://github.com/tencent-ailab/PCDMs)\nBased on testing, the author's original images work very well, but using my own images generally requires some luck!"
        },
        {
            "author": "ricklove",
            "title": "comfyui-ricklove",
            "id": "ricklove",
            "reference": "https://github.com/ricklove/comfyui-ricklove",
            "files": [
                "https://github.com/ricklove/comfyui-ricklove"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Image Crop and Resize by Mask, Image Uncrop, Image Shadow, Optical Flow (Dip), Warp Image with Flow, Image Threshold (Channels), Finetune Variable, Finetune Analyze, Finetune Analyze Batch, ... Misc ComfyUI nodes by Rick Love"
        },
        {
            "author": "nosiu",
            "title": "ComfyUI InstantID Faceswapper",
            "id": "instantid-faceswapper",
            "reference": "https://github.com/nosiu/comfyui-instantId-faceswap",
            "files": [
                "https://github.com/nosiu/comfyui-instantId-faceswap"
            ],
            "install_type": "git-clone",
            "description": "Implementation of [a/faceswap](https://github.com/nosiu/InstantID-faceswap/tree/main) based on [a/InstantID](https://github.com/InstantID/InstantID) for ComfyUI. Allows usage of [a/LCM Lora](https://huggingface.co/latent-consistency/lcm-lora-sdxl) which can produce good results in only a few generation steps.\nNOTE:Works ONLY with SDXL checkpoints."
        },
        {
            "author": "LyazS",
            "title": "Anime Character Segmentation node for comfyui",
            "reference": "https://github.com/LyazS/comfyui-anime-seg",
            "files": [
                "https://github.com/LyazS/comfyui-anime-seg"
            ],
            "install_type": "git-clone",
            "description": "A Anime Character Segmentation node for comfyui, based on [this hf space](https://huggingface.co/spaces/skytnt/anime-remove-background)."
        },
        {
            "author": "Chan-0312",
            "title": "ComfyUI-IPAnimate",
            "reference": "https://github.com/Chan-0312/ComfyUI-IPAnimate",
            "files": [
                "https://github.com/Chan-0312/ComfyUI-IPAnimate"
            ],
            "install_type": "git-clone",
            "description": "This is a project that generates videos frame by frame based on IPAdapter+ControlNet. Unlike [a/Steerable-motion](https://github.com/banodoco/Steerable-Motion), we do not rely on AnimateDiff. This decision is primarily due to the fact that the videos generated by AnimateDiff are often blurry. Through frame-by-frame control using IPAdapter+ControlNet, we can produce higher definition and more controllable videos."
        },
        {
            "author": "Chan-0312",
            "title": "ComfyUI-EasyDeforum",
            "reference": "https://github.com/Chan-0312/ComfyUI-EasyDeforum",
            "files": [
                "https://github.com/Chan-0312/ComfyUI-EasyDeforum"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Easy2DDeforum (Chan)"
        },
        {
            "author": "trumanwong",
            "title": "ComfyUI-NSFW-Detection",
            "reference": "https://github.com/trumanwong/ComfyUI-NSFW-Detection",
            "files": [
                "https://github.com/trumanwong/ComfyUI-NSFW-Detection"
            ],
            "install_type": "git-clone",
            "description": "An implementation of NSFW Detection for ComfyUI"
        },
        {
            "author": "TemryL",
            "title": "ComfyS3",
            "reference": "https://github.com/TemryL/ComfyS3",
            "files": [
                "https://github.com/TemryL/ComfyS3"
            ],
            "install_type": "git-clone",
            "description": "ComfyS3 seamlessly integrates with [a/Amazon S3](https://aws.amazon.com/en/s3/) in ComfyUI. This open-source project provides custom nodes for effortless loading and saving of images, videos, and checkpoint models directly from S3 buckets within the ComfyUI graph interface."
        },
        {
            "author": "davask",
            "title": "🐰 MaraScott Nodes",
            "id": "marascott-nodes",
            "reference": "https://github.com/MaraScott/ComfyUI_MaraScott_Nodes",
            "files": [
                "https://github.com/MaraScott/ComfyUI_MaraScott_Nodes"
            ],
            "install_type": "git-clone",
            "description": "A set of community node including a universal bus and a large Upscaler/Refiner\n[w/ComfyUI-MarasIT-Nodes has been changed to ComfyUI_MaraScott_Nodes. If you have previously installed ComfyUI-MarasIT-Nodes, Please uninstall the previous one and reinstall this.]"
        },
        {
            "author": "yffyhk",
            "title": "comfyui_auto_danbooru",
            "reference": "https://github.com/yffyhk/comfyui_auto_danbooru",
            "files": [
                "https://github.com/yffyhk/comfyui_auto_danbooru"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Get Danbooru, Tag Encode"
        },
        {
            "author": "dfl",
            "title": "CLIP with BREAK syntax",
            "reference": "https://github.com/dfl/comfyui-clip-with-break",
            "files": [
                "https://github.com/dfl/comfyui-clip-with-break"
            ],
            "install_type": "git-clone",
            "description": "Clip text encoder with BREAK formatting like A1111 (uses conditioning concat)"
        },
        {
            "author": "dfl",
            "title": "ComfyUI-TCD-scheduler",
            "reference": "https://github.com/dfl/comfyui-tcd-scheduler",
            "files": [
                "https://github.com/dfl/comfyui-tcd-scheduler"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI Custom Sampler nodes that implement Zheng et al.'s Trajectory Consistency Distillation based on [a/https://mhh0318.github.io/tcd](https://mhh0318.github.io/tcd)"
        },
        {
            "author": "antrobot",
            "title": "antrobots ComfyUI Nodepack",
            "reference": "https://github.com/antrobot1234/antrobots-comfyUI-nodepack",
            "files": [
                "https://github.com/antrobot1234/antrobots-comfyUI-nodepack"
            ],
            "install_type": "git-clone",
            "description": "A small node pack containing various things I felt like ought to be in base comfy-UI. Currently includes Some image handling nodes to help with inpainting, a version of KSampler (advanced) that allows for denoise, and a node that can swap it's inputs. Remember to make an issue if you experience any bugs or errors!"
        },
        {
            "author": "bilal-arikan",
            "title": "ComfyUI_TextAssets",
            "reference": "https://github.com/bilal-arikan/ComfyUI_TextAssets",
            "files": [
                "https://github.com/bilal-arikan/ComfyUI_TextAssets"
            ],
            "install_type": "git-clone",
            "description": "With this node you can upload text files to input folder from your local computer."
        },
        {
            "author": "kadirnar",
            "title": "ComfyUI-Transformers",
            "reference": "https://github.com/kadirnar/ComfyUI-Transformers",
            "files": [
                "https://github.com/kadirnar/ComfyUI-Transformers"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI-Transformers is a cutting-edge project combining the power of computer vision and natural language processing to create intuitive and user-friendly interfaces. Our goal is to make technology more accessible and engaging."
        },
        {
            "author": "digitaljohn",
            "title": "ComfyUI-ProPost",
            "reference": "https://github.com/digitaljohn/comfyui-propost",
            "files": [
                "https://github.com/digitaljohn/comfyui-propost"
            ],
            "install_type": "git-clone",
            "description": "A set of custom ComfyUI nodes for performing basic post-processing effects including Film Grain and Vignette. These effects can help to take the edge off AI imagery and make them feel more natural."
        },
        {
            "author": "DonBaronFactory",
            "title": "ComfyUI-Cre8it-Nodes",
            "reference": "https://github.com/DonBaronFactory/ComfyUI-Cre8it-Nodes",
            "files": [
                "https://github.com/DonBaronFactory/ComfyUI-Cre8it-Nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes:CRE8IT Serial Prompter, CRE8IT Apply Serial Prompter, CRE8IT Image Sizer. A few simple nodes to facilitate working wiht ComfyUI Workflows"
        },
        {
            "author": "deforum",
            "title": "Deforum Nodes",
            "reference": "https://github.com/XmYx/deforum-comfy-nodes",
            "files": [
                "https://github.com/XmYx/deforum-comfy-nodes"
            ],
            "install_type": "git-clone",
            "description": "Official Deforum animation pipeline tools that provide a unique way to create frame-by-frame generative motion art."
        },
        {
            "author": "adbrasi",
            "title": "ComfyUI-TrashNodes-DownloadHuggingface",
            "reference": "https://github.com/adbrasi/ComfyUI-TrashNodes-DownloadHuggingface",
            "files": [
                "https://github.com/adbrasi/ComfyUI-TrashNodes-DownloadHuggingface"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI-TrashNodes-DownloadHuggingface is a ComfyUI node designed to facilitate the download of models you have just trained and uploaded to Hugging Face. This node is particularly useful for users who employ Google Colab for training and need to quickly download their models for deployment."
        },
        {
            "author": "mbrostami",
            "title": "ComfyUI-HF",
            "reference": "https://github.com/mbrostami/ComfyUI-HF",
            "files": [
                "https://github.com/mbrostami/ComfyUI-HF"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI Node to work with Hugging Face repositories"
        },
        {
            "author": "Billius-AI",
            "title": "ComfyUI-Path-Helper",
            "reference": "https://github.com/Billius-AI/ComfyUI-Path-Helper",
            "files": [
                "https://github.com/Billius-AI/ComfyUI-Path-Helper"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Create Project Root, Add Folder, Add Folder Advanced, Add File Name Prefix, Add File Name Prefix Advanced, ShowPath"
        },
        {
            "author": "Franck-Demongin",
            "title": "NX_PromptStyler",
            "reference": "https://github.com/Franck-Demongin/NX_PromptStyler",
            "files": [
                "https://github.com/Franck-Demongin/NX_PromptStyler"
            ],
            "install_type": "git-clone",
            "description": "A custom node for ComfyUI to create a prompt based on a list of keywords saved in CSV files."
        },
        {
            "author": "xiaoxiaodesha",
            "title": "hd-nodes-comfyui",
            "reference": "https://github.com/xiaoxiaodesha/hd_node",
            "files": [
                "https://github.com/xiaoxiaodesha/hd_node"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Combine HDMasks, Cover HDMasks, HD FaceIndex, HD SmoothEdge, HD GetMaskArea, HD Image Levels, HD Ultimate SD Upscale"
        },
        {
            "author": "ShmuelRonen",
            "title": "ComfyUI-SVDResizer",
            "id": "svdresizer",
            "reference": "https://github.com/ShmuelRonen/ComfyUI-SVDResizer",
            "files": [
                "https://github.com/ShmuelRonen/ComfyUI-SVDResizer"
            ],
            "install_type": "git-clone",
            "description": "SVDResizer is a helper for resizing the source image, according to the sizes enabled in Stable Video Diffusion. The rationale behind the possibility of changing the size of the image in steps between the ranges of 576 and 1024, is the use of the greatest common denominator of these two numbers which is 64. SVD is lenient with resizing that adheres to this rule, so the chance of coherent video that is not the standard size of 576X1024 is greater. It is advisable to keep the value 1024 constant and play with the second size to maintain the stability of the result."
        },
        {
            "author": "ShmuelRonen",
            "title": "Wav2Lip Node for ComfyUI",
            "id": "wav2lip",
            "reference": "https://github.com/ShmuelRonen/ComfyUI_wav2lip",
            "files": [
                "https://github.com/ShmuelRonen/ComfyUI_wav2lip"
            ],
            "install_type": "git-clone",
            "description": "The Wav2Lip node is a custom node for ComfyUI that allows you to perform lip-syncing on videos using the Wav2Lip model. It takes an input video and an audio file and generates a lip-synced output video."
        },
        {
            "author": "redhottensors",
            "title": "ComfyUI-Prediction",
            "id": "prediction",
            "reference": "https://github.com/redhottensors/ComfyUI-Prediction",
            "files": [
                "https://github.com/redhottensors/ComfyUI-Prediction"
            ],
            "install_type": "git-clone",
            "description": "Fully customizable Classifier Free Guidance for ComfyUI."
        },
        {
            "author": "Mamaaaamooooo",
            "title": "Batch Rembg for ComfyUI",
            "id": "batch-rembg",
            "reference": "https://github.com/Mamaaaamooooo/batchImg-rembg-ComfyUI-nodes",
            "files": [
                "https://github.com/Mamaaaamooooo/batchImg-rembg-ComfyUI-nodes"
            ],
            "install_type": "git-clone",
            "description": "Remove background of plural images."
        },
        {
            "author": "jordoh",
            "title": "ComfyUI Deepface",
            "id": "deepface",
            "reference": "https://github.com/jordoh/ComfyUI-Deepface",
            "files": [
                "https://github.com/jordoh/ComfyUI-Deepface"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI nodes wrapping the [a/deepface](https://github.com/serengil/deepface) library."
        },
        {
            "author": "al-swaiti",
            "title": "ComfyUI-CascadeResolutions",
            "id": "cascade-resolution",
            "reference": "https://github.com/al-swaiti/ComfyUI-CascadeResolutions",
            "files": [
                "https://github.com/al-swaiti/ComfyUI-CascadeResolutions"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Cascade Resolutions"
        },
        {
            "author": "mirabarukaso",
            "title": "ComfyUI_Mira",
            "id": "mira",
            "reference": "https://github.com/mirabarukaso/ComfyUI_Mira",
            "files": [
                "https://github.com/mirabarukaso/ComfyUI_Mira"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Integer Multiplier, Float Multiplier, Convert Numeral to String, Create Canvas Advanced, Create Canvas, Create PNG Mask, Color Mask to HEX String, Color Mask to INT RGB, Color Masks to List"
        },
        {
            "author": "1038lab",
            "title": "ComfyUI-GPT2P",
            "id": "gpt2p",
            "reference": "https://github.com/1038lab/ComfyUI-GPT2P",
            "files": [
                "https://github.com/1038lab/ComfyUI-GPT2P"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI Node - Hugging Face repositories GTP2 Prompt"
        },
        {
            "author": "LykosAI",
            "title": "ComfyUI Nodes for Inference.Core",
            "id": "inference-core",
            "reference": "https://github.com/LykosAI/ComfyUI-Inference-Core-Nodes",
            "files": [
                "https://github.com/LykosAI/ComfyUI-Inference-Core-Nodes"
            ],
            "install_type": "git-clone",
            "description": "Primary Nodes for Inference.Core and Stability Matrix. With a focus on not impacting startup performance and using fully qualified Node names."
        },
        {
            "author": "Klinter",
            "title": "Klinter_nodes",
            "id": "klinter",
            "reference": "https://github.com/klinter007/klinter_nodes",
            "files": [
                "https://github.com/klinter007/klinter_nodes"
            ],
            "install_type": "git-clone",
            "description": "Concat_strings atm - celebrating first_node"
        },
        {
            "author": "Ludobico",
            "title": "ComfyUI-ScenarioPrompt",
            "id": "scenarioprompt",
            "reference": "https://github.com/Ludobico/ComfyUI-ScenarioPrompt",
            "files": [
                "https://github.com/Ludobico/ComfyUI-ScenarioPrompt"
            ],
            "install_type": "git-clone",
            "description": "ScenarioPrompt is a custom node that helps you understand what you're prompting for each property as you build your prompts"
        },
        {
            "author": "logtd",
            "title": "InstanceDiffusion Nodes",
            "id": "instancediffusion",
            "reference": "https://github.com/logtd/ComfyUI-InstanceDiffusion",
            "files": [
                "https://github.com/logtd/ComfyUI-InstanceDiffusion"
            ],
            "install_type": "git-clone",
            "description": "A set of nodes to perform multi-object prompting with InstanceDiffusion"
        },
        {
            "author": "logtd",
            "title": "Tracking Nodes for Videos",
            "id": "tracking",
            "reference": "https://github.com/logtd/ComfyUI-TrackingNodes",
            "files": [
                "https://github.com/logtd/ComfyUI-TrackingNodes"
            ],
            "install_type": "git-clone",
            "description": "A set of nodes to track objects through videos using YOLO and other processors."
        },
        {
            "author": "logtd",
            "title": "ComfyUI-InversedNoise",
            "id": "inversed-noise",
            "reference": "https://github.com/logtd/ComfyUI-InversedNoise",
            "files": [
                "https://github.com/logtd/ComfyUI-InversedNoise"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Inversed Euler Sampler, Mix Noise with Latent, Combine Latent Noise"
        },
        {
            "author": "logtd",
            "title": "ComfyUI-RefSampling",
            "id": "refsampling",
            "reference": "https://github.com/logtd/ComfyUI-RefSampling",
            "files": [
                "https://github.com/logtd/ComfyUI-RefSampling"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Apply Ref UNet, Ref Sampler, Ref Sampler Custom"
        },
        {
            "author": "logtd",
            "title": "ComfyUI-FLATTEN",
            "id": "flatten",
            "reference": "https://github.com/logtd/ComfyUI-FLATTEN",
            "files": [
                "https://github.com/logtd/ComfyUI-FLATTEN"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI nodes to use [a/FLATTEN: optical FLow-guided ATTENtion for consistent text-to-video editing](https://github.com/yrcong/flatten)."
        },
        {
            "author": "logtd",
            "title": "ComfyUI-RAVE Attention",
            "id": "rave",
            "reference": "https://github.com/logtd/ComfyUI-RAVE_ATTN",
            "files": [
                "https://github.com/logtd/ComfyUI-RAVE_ATTN"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI nodes to use RAVE attention as a temporal attention mechanism.\nThis differs from other implementations in that it does not concatenate the images together, but within the UNet's Self-Attention mechanism performs the RAVE technique. By not altering the images/latents throughout the UNet, this method does not affect other temporal techniques, style mechanisms, or other UNet modifications.\nFor example, it can be combined with AnimateDiff, ModelScope/ZeroScope, or FLATTEN."
        },
        {
            "author": "Big-Idea-Technology",
            "title": "ComfyUI-Book-Tools Nodes for ComfyUI",
            "id": "booktool",
            "reference": "https://github.com/Big-Idea-Technology/ComfyUI-Book-Tools",
            "files": [
                "https://github.com/Big-Idea-Technology/ComfyUI-Book-Tools"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI-Book-Tools is a set o new nodes for ComfyUI that allows users to easily add text overlays to images within their ComfyUI projects. This Node leverages Python Imaging Library (PIL) and PyTorch to dynamically render text on images, supporting a wide range of customization options including font size, alignment, color, and padding. Loop with any parameters (*), prompt batch schedule with prompt selector, end queue for automatic ending current queue."
        },
        {
            "author": "Big Idea Technology",
            "title": "LLM Node for ComfyUI",
            "reference": "https://github.com/Big-Idea-Technology/ComfyUI_LLM_Node",
            "files": [
                "https://github.com/Big-Idea-Technology/ComfyUI_LLM_Node"
            ],
            "install_type": "git-clone",
            "description": "The LLM_Node enhances ComfyUI by integrating advanced language model capabilities, enabling a wide range of NLP tasks such as text generation, content summarization, question answering, and more. This flexibility is powered by various transformer model architectures from the transformers library, allowing for the deployment of models like T5, GPT-2, and others based on your project's needs."
        },
        {
            "author": "Guillaume-Fgt",
            "title": "ComfyUI_StableCascadeLatentRatio",
            "id": "cascade-latent-ratio",
            "reference": "https://github.com/Guillaume-Fgt/ComfyUI_StableCascadeLatentRatio",
            "files": [
                "https://github.com/Guillaume-Fgt/ComfyUI_StableCascadeLatentRatio"
            ],
            "install_type": "git-clone",
            "description": "A custom node to create empty latents for Stable Cascade.\nfeatures: width and height incrementation of 64 by default, possibility to lock the aspect ratio, switch width/height at execution"
        },
        {
            "author": "AuroBit",
            "title": "ComfyUI OOTDiffusion",
            "id": "ootdiffusion",
            "reference": "https://github.com/AuroBit/ComfyUI-OOTDiffusion",
            "files": [
                "https://github.com/AuroBit/ComfyUI-OOTDiffusion"
            ],
            "install_type": "git-clone",
            "description": "A ComfyUI custom node that simply integrates the [a/OOTDiffusion](https://github.com/levihsu/OOTDiffusion) functionality."
        },
        {
            "author": "AuroBit",
            "title": "ComfyUI-AnimateAnyone-reproduction",
            "id": "animateanyone-reproduction",
            "reference": "https://github.com/AuroBit/ComfyUI-AnimateAnyone-reproduction",
            "files": [
                "https://github.com/AuroBit/ComfyUI-AnimateAnyone-reproduction"
            ],
            "install_type": "git-clone",
            "description": "A ComfyUI custom node that simply integrates the [a/animate-anyone-reproduction](https://github.com/bendanzzc/AnimateAnyone-reproduction) functionality."
        },
        {
            "author": "czcz1024",
            "title": "Face Compare",
            "id": "facecompare",
            "reference": "https://github.com/czcz1024/Comfyui-FaceCompare",
            "files": [
                "https://github.com/czcz1024/Comfyui-FaceCompare"
            ],
            "install_type": "git-clone",
            "description": "Nodes:FaceCompare"
        },
        {
            "author": "TheBill2001",
            "title": "comfyui-upscale-by-model",
            "reference": "https://github.com/TheBill2001/comfyui-upscale-by-model",
            "files": [
                "https://github.com/TheBill2001/comfyui-upscale-by-model"
            ],
            "install_type": "git-clone",
            "description": "This custom node allow upscaling an image by a factor using a model."
        },
        {
            "author": "leoleelxh",
            "title": "ComfyUI-LLMs",
            "reference": "https://github.com/leoleelxh/ComfyUI-LLMs",
            "files": [
                "https://github.com/leoleelxh/ComfyUI-LLMs"
            ],
            "install_type": "git-clone",
            "description": "A minimalist node that calls LLMs, combined with one API, can call all language models, including local models."
        },
        {
            "author": "hughescr",
            "title": "OpenPose Keypoint Extractor",
            "reference": "https://github.com/hughescr/ComfyUI-OpenPose-Keypoint-Extractor",
            "files": [
                "https://github.com/hughescr/ComfyUI-OpenPose-Keypoint-Extractor"
            ],
            "install_type": "git-clone",
            "description": "This is a single node which can take the POSE_KEYPOINT output from the OpenPose extractor node, parse it, and return x,y,width,height bounding boxes around any elements of the OpenPose skeleton"
        },
        {
            "author": "jkrauss82",
            "title": "ULTools for ComfyUI",
            "reference": "https://github.com/jkrauss82/ultools-comfyui",
            "files": [
                "https://github.com/jkrauss82/ultools-comfyui"
            ],
            "install_type": "git-clone",
            "description": "Nodes:SaveImgAdv, CLIPTextEncodeWithStats. Collection of tools supporting txt2img generation in ComfyUI and other tasks."
        },
        {
            "author": "hiforce",
            "title": "Comfyui HiFORCE Plugin",
            "reference": "https://github.com/hiforce/comfyui-hiforce-plugin",
            "files": [
                "https://github.com/hiforce/comfyui-hiforce-plugin"
            ],
            "install_type": "git-clone",
            "description": "Custom nodes pack provided by [a/HiFORCE](https://www.hiforce.net/) for ComfyUI. This custom node helps to conveniently enhance images through Sampler, Upscaler, Mask, and more.\nNOTE:You should install [a/ComfyUI-Impact-Pack](https://github.com/ltdrdata/ComfyUI-Impact-Pack). Many optimizations are built upon the foundation of ComfyUI-Impact-Pack."
        },
        {
            "author": "kuschanow",
            "title": "Advanced Latent Control",
            "reference": "https://github.com/RomanKuschanow/ComfyUI-Advanced-Latent-Control",
            "files": [
                "https://github.com/RomanKuschanow/ComfyUI-Advanced-Latent-Control"
            ],
            "install_type": "git-clone",
            "description": "This custom node helps to transform latent in different ways."
        },
        {
            "author": "guill",
            "title": "abracadabra-comfyui",
            "reference": "https://github.com/guill/abracadabra-comfyui",
            "files": [
                "https://github.com/guill/abracadabra-comfyui"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Abracadabra Summary, Abracadabra"
        },
        {
            "author": "cerspense",
            "title": "cspnodes",
            "reference": "https://github.com/cerspense/ComfyUI_cspnodes",
            "files": [
                "https://github.com/cerspense/ComfyUI_cspnodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Image Dir Iterator, Modelscopet2v, Modelscopev2v."
        },
        {
            "author": "qwixiwp",
            "title": "queuetools",
            "reference": "https://github.com/qwixiwp/queuetools",
            "files": [
                "https://github.com/qwixiwp/queuetools"
            ],
            "install_type": "git-clone",
            "description": "Nodes:load images (queue tools). tools made for queueing in comfyUI"
        },
        {
            "author": "Chan-0312",
            "title": "ComfyUI-Prompt-Preview",
            "reference": "https://github.com/Chan-0312/ComfyUI-Prompt-Preview",
            "files": [
                "https://github.com/Chan-0312/ComfyUI-Prompt-Preview"
            ],
            "install_type": "git-clone",
            "description": "Welcome to ComfyUI Prompt Preview, where you can visualize the styles from [sdxl_prompt_styler](https://github.com/twri/sdxl_prompt_styler)."
        },
        {
            "author": "munkyfoot",
            "title": "ComfyUI-TextOverlay",
            "reference": "https://github.com/Munkyfoot/ComfyUI-TextOverlay",
            "files": [
                "https://github.com/Munkyfoot/ComfyUI-TextOverlay"
            ],
            "install_type": "git-clone",
            "description": "This extension provides a node that allows you to overlay text on an image or a batch of images with support for custom fonts and styles."
        },
        {
            "author": "holchan",
            "title": "ComfyUI-ModelDownloader",
            "reference": "https://github.com/holchan/ComfyUI-ModelDownloader",
            "files": [
                "https://github.com/holchan/ComfyUI-ModelDownloader"
            ],
            "install_type": "git-clone",
            "description": "A ComfyUI node to download models(Checkpoints and LoRA) from external links and act as an output standalone node."
        },
        {
            "author": "Alysondao",
            "title": "Comfyui-Yolov8-JSON",
            "reference": "https://github.com/Alysondao/Comfyui-Yolov8-JSON",
            "files": [
                "https://github.com/Alysondao/Comfyui-Yolov8-JSON"
            ],
            "install_type": "git-clone",
            "description": "This node is mainly based on the Yolov8 model for object detection, and it outputs related images, masks, and JSON information."
        },
        {
            "author": "CC-BryanOttho",
            "title": "ComfyUI_API_Manager",
            "reference": "https://github.com/CC-BryanOttho/ComfyUI_API_Manager",
            "files": [
                "https://github.com/CC-BryanOttho/ComfyUI_API_Manager"
            ],
            "install_type": "git-clone",
            "description": "This package provides three custom nodes designed to streamline workflows involving API requests, dynamic text manipulation based on API responses, and image posting to APIs. These nodes are particularly useful for automating interactions with APIs, enhancing text-based workflows with dynamic data, and facilitating image uploads."
        },
        {
            "author": "maracman",
            "title": "ComfyUI-SubjectStyle-CSV",
            "reference": "https://github.com/maracman/ComfyUI-SubjectStyle-CSV",
            "files": [
                "https://github.com/maracman/ComfyUI-SubjectStyle-CSV"
            ],
            "install_type": "git-clone",
            "description": "Store a CSV of prompts where the style can change for each subject. The CSV node initialises with the column (style) and row (subject) names for easy interpretability."
        },
        {
            "author": "438443467",
            "title": "ComfyUI-GPT4V-Image-Captioner",
            "reference": "https://github.com/438443467/ComfyUI-GPT4V-Image-Captioner",
            "files": [
                "https://github.com/438443467/ComfyUI-GPT4V-Image-Captioner"
            ],
            "install_type": "git-clone",
            "description": "Nodes:GPT4V-Image-Captioner"
        },
        {
            "author": "uetuluk",
            "title": "comfyui-webcam-node",
            "id": "webcam",
            "reference": "https://github.com/uetuluk/comfyui-webcam-node",
            "files": [
                "https://github.com/uetuluk/comfyui-webcam-node"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Webcam Capture"
        },
        {
            "author": "huchenlei",
            "title": "ComfyUI-layerdiffuse (layerdiffusion)",
            "id": "layerdiffuse",
            "reference": "https://github.com/huchenlei/ComfyUI-layerdiffuse",
            "files": [
                "https://github.com/huchenlei/ComfyUI-layerdiffuse"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI implementation of [a/LayerDiffusion](https://github.com/layerdiffusion/LayerDiffusion)."
        },
        {
            "author": "huchenlei",
            "title": "ComfyUI_DanTagGen",
            "id": "dantangen",
            "reference": "https://github.com/huchenlei/ComfyUI_DanTagGen",
            "files": [
                "https://github.com/huchenlei/ComfyUI_DanTagGen"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI node of [a/Kohaku's DanTagGen Demo](https://huggingface.co/KBlueLeaf/DanTagGen?not-for-all-audiences=true)."
        },
        {
            "author": "huchenlei",
            "title": "ComfyUI-openpose-editor",
            "reference": "https://github.com/huchenlei/ComfyUI-openpose-editor",
            "files": [
                "https://github.com/huchenlei/ComfyUI-openpose-editor"
            ],
            "install_type": "git-clone",
            "description": "Port of [a/https://github.com/huchenlei/sd-webui-openpose-editor](https://github.com/huchenlei/sd-webui-openpose-editor) in ComfyUI"
        },
        {
            "author": "huchenlei",
            "title": "ComfyUI-IC-Light-Native",
            "id": "ic-light-native",
            "reference": "https://github.com/huchenlei/ComfyUI-IC-Light-Native",
            "files": [
                "https://github.com/huchenlei/ComfyUI-IC-Light-Native"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI native implementation of [a/IC-Light](https://github.com/lllyasviel/IC-Light)."
        },
        {
            "author": "nathannlu",
            "title": "ComfyUI Pets",
            "id": "pets",
            "reference": "https://github.com/nathannlu/ComfyUI-Pets",
            "files": [
                "https://github.com/nathannlu/ComfyUI-Pets"
            ],
            "install_type": "git-clone",
            "description": "Play with your pet while your workflow generates!"
        },
        {
            "author": "nathannlu",
            "title": "Comfy Cloud",
            "id": "cloud",
            "reference": "https://github.com/nathannlu/ComfyUI-Cloud",
            "files": [
                "https://github.com/nathannlu/ComfyUI-Cloud"
            ],
            "install_type": "git-clone",
            "description": "Run your workflow using cloud GPU resources, from your local ComfyUI.\nNOTE:After you first install the plugin...\nThe first time you click 'generate', you will be prompted to log into your account.Subsequent generations after the first is faster (the first run it takes a while to process your workflow). Once those two steps have been completed, you will be able to seamlessly generate your workflow on the cloud!"
        },
        {
            "author": "11dogzi",
            "title": "Comfyui-ergouzi-Nodes",
            "id": "ergouzi",
            "reference": "https://github.com/11dogzi/Comfyui-ergouzi-Nodes",
            "files": [
                "https://github.com/11dogzi/Comfyui-ergouzi-Nodes"
            ],
            "install_type": "git-clone",
            "description": "This is a node group kit that covers multiple nodes such as local refinement, tag management, random prompt words, text processing, image processing, mask processing, etc"
        },
        {
            "author": "BXYMartin",
            "title": "ComfyUI-InstantIDUtils",
            "id": "instantid-utils",
            "reference": "https://github.com/BXYMartin/ComfyUI-InstantIDUtils",
            "files": [
                "https://github.com/BXYMartin/ComfyUI-InstantIDUtils"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Multi-ControlNet Converter, List of Images, Convert PIL to Tensor (NHWC), Convert Tensor (NHWC) to (NCHW), Convert Tensor (NHWC) to PIL"
        },
        {
            "author": "cdb-boop",
            "title": "comfyui-image-round",
            "id": "image-round",
            "reference": "https://github.com/cdb-boop/comfyui-image-round",
            "files": [
                "https://github.com/cdb-boop/comfyui-image-round"
            ],
            "install_type": "git-clone",
            "description": "A simple node to round an input image up (pad) or down (crop) to the nearest integer multiple. Padding offset from left/bottom and the padding value are adjustable."
        },
        {
            "author": "cdb-boop",
            "title": "ComfyUI Bringing Old Photos Back to Life",
            "reference": "https://github.com/cdb-boop/ComfyUI-Bringing-Old-Photos-Back-to-Life",
            "files": [
                "https://github.com/cdb-boop/ComfyUI-Bringing-Old-Photos-Back-to-Life"
            ],
            "install_type": "git-clone",
            "description": "Enhance old or low-quality images in ComfyUI. Optional features include automatic scratch removal and face enhancement. Based on Microsoft's Bringing-Old-Photos-Back-to-Life. Requires installing models, so see instructions here: https://github.com/cdb-boop/ComfyUI-Bringing-Old-Photos-Back-to-Life."
        },
        {
            "author": "atmaranto",
            "title": "SaveAsScript",
            "id": "saveasscript",
            "reference": "https://github.com/atmaranto/ComfyUI-SaveAsScript",
            "files": [
                "https://github.com/atmaranto/ComfyUI-SaveAsScript"
            ],
            "install_type": "git-clone",
            "description": "A version of ComfyUI-to-Python-Extension that works as a custom node. Adds a button in the UI that saves the current workflow as a Python file, a CLI for converting workflows, and slightly better custom node support."
        },
        {
            "author": "meshmesh-io",
            "title": "mm-comfyui-megamask",
            "id": "megamask",
            "reference": "https://github.com/meshmesh-io/mm-comfyui-megamask",
            "files": [
                "https://github.com/meshmesh-io/mm-comfyui-megamask"
            ],
            "install_type": "git-clone",
            "description": "Nodes:ColorListMaskToImage, FlattenAndCombineMaskImages"
        },
        {
            "author": "meshmesh-io",
            "title": "mm-comfyui-loopback",
            "id": "mm-loopback",
            "reference": "https://github.com/meshmesh-io/mm-comfyui-loopback",
            "files": [
                "https://github.com/meshmesh-io/mm-comfyui-loopback"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Loop, LoopStart, LoopEnd, LoopStart_SEGIMAGE, LoopEnd_SEGIMAGE"
        },
        {
            "author": "meshmesh-io",
            "title": "ComfyUI-MeshMesh",
            "id": "meshmesh",
            "reference": "https://github.com/meshmesh-io/ComfyUI-MeshMesh",
            "files": [
                "https://github.com/meshmesh-io/ComfyUI-MeshMesh"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Masks to Colored Masks, Color Picker"
        },
        {
            "author": "CozyMantis",
            "title": "Cozy Human Parser",
            "id": "humanparser",
            "reference": "https://github.com/cozymantis/human-parser-comfyui-node",
            "files": [
                "https://github.com/cozymantis/human-parser-comfyui-node"
            ],
            "install_type": "git-clone",
            "description": "A ComfyUI node to automatically extract masks for body regions and clothing/fashion items. Made with 💚 by the CozyMantis squad."
        },
        {
            "author": "CozyMantis",
            "title": "Cozy Reference Pose Generator",
            "id": "posegen",
            "reference": "https://github.com/cozymantis/pose-generator-comfyui-node",
            "files": [
                "https://github.com/cozymantis/pose-generator-comfyui-node"
            ],
            "install_type": "git-clone",
            "description": "Generate OpenPose face/body reference poses in ComfyUI with ease. Made with 💚 by the CozyMantis squad."
        },
        {
            "author": "CozyMantis",
            "title": "Cozy Utils",
            "id": "cozy-utils",
            "reference": "https://github.com/cozymantis/cozy-utils-comfyui-nodes",
            "files": [
                "https://github.com/cozymantis/cozy-utils-comfyui-nodes"
            ],
            "install_type": "git-clone",
            "description": "Various cozy nodes, made with 💚 by the CozyMantis squad."
        },
        {
            "author": "vivax3794",
            "title": "ComfyUI-Vivax-Nodes",
            "reference": "https://github.com/vivax3794/ComfyUI-Vivax-Nodes",
            "files": [
                "https://github.com/vivax3794/ComfyUI-Vivax-Nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Inspect, Any String, Model From URL"
        },
        {
            "author": "victorchall",
            "title": "Comfyui Webcam capture node",
            "reference": "https://github.com/victorchall/comfyui_webcamcapture",
            "files": [
                "https://github.com/victorchall/comfyui_webcamcapture"
            ],
            "install_type": "git-clone",
            "description": "This node captures images one at a time from your webcam when you click generate.\nThis is particular useful for img2img or controlnet workflows.\nNOTE:This node will take over your webcam, so if you have another program using it, you may need to close that program first. Likewise, you may need to close Comfyui or close the workflow to release the webcam."
        },
        {
            "author": "ljleb",
            "title": "comfy-mecha",
            "id": "mecha",
            "reference": "https://github.com/ljleb/comfy-mecha",
            "files": [
                "https://github.com/ljleb/comfy-mecha"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Blocks Mecha Hyper, Mecha Merger, Model Mecha Recipe, Custom Code Mecha Recipe"
        },
        {
            "author": "diSty",
            "title": "ComfyUI Frame Maker",
            "id": "frame-maker",
            "reference": "https://github.com/diStyApps/ComfyUI_FrameMaker",
            "files": [
                "https://github.com/diStyApps/ComfyUI_FrameMaker"
            ],
            "install_type": "git-clone",
            "description": "This node creates a sequence of frames by moving and scaling a subject image over a background image."
        },
        {
            "author": "hackkhai",
            "title": "ComfyUI-Image-Matting",
            "id": "image-matting",
            "reference": "https://github.com/hackkhai/ComfyUI-Image-Matting",
            "files": [
                "https://github.com/hackkhai/ComfyUI-Image-Matting"
            ],
            "install_type": "git-clone",
            "description": "This node improves the quality of the image mask. more suitable for image composite matting"
        },
        {
            "author": "Pos13",
            "title": "Cyclist",
            "id": "cyclist",
            "reference": "https://github.com/Pos13/comfyui-cyclist",
            "files": [
                "https://github.com/Pos13/comfyui-cyclist"
            ],
            "install_type": "git-clone",
            "description": "This extension provides tools to iterate generation results between runs. In general, it's for cycles."
        },
        {
            "author": "ExponentialML",
            "title": "ComfyUI_ModelScopeT2V",
            "id": "modelscopet2v",
            "reference": "https://github.com/ExponentialML/ComfyUI_ModelScopeT2V",
            "files": [
                "https://github.com/ExponentialML/ComfyUI_ModelScopeT2V"
            ],
            "install_type": "git-clone",
            "description": "Allows native usage of ModelScope based Text To Video Models in ComfyUI"
        },
        {
            "author": "ExponentialML",
            "title": "ComfyUI - Native DynamiCrafter",
            "id": "dynamicrafter",
            "reference": "https://github.com/ExponentialML/ComfyUI_Native_DynamiCrafter",
            "files": [
                "https://github.com/ExponentialML/ComfyUI_Native_DynamiCrafter"
            ],
            "install_type": "git-clone",
            "description": "DynamiCrafter that works natively with ComfyUI's nodes, optimizations, ControlNet, and more."
        },
        {
            "author": "ExponentialML",
            "title": "ComfyUI_VisualStylePrompting",
            "id": "visual-style-prompting",
            "reference": "https://github.com/ExponentialML/ComfyUI_VisualStylePrompting",
            "files": [
                "https://github.com/ExponentialML/ComfyUI_VisualStylePrompting"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI Version of '[a/Visual Style Prompting with Swapping Self-Attention](https://github.com/naver-ai/Visual-Style-Prompting)'"
        },
        {
            "author": "angeloshredder",
            "title": "StableCascadeResizer",
            "reference": "https://github.com/angeloshredder/StableCascadeResizer",
            "files": [
                "https://github.com/angeloshredder/StableCascadeResizer"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Cascade_Resizer"
        },
        {
            "author": "stavsap",
            "title": "ComfyUI Ollama",
            "id": "ollama",
            "reference": "https://github.com/stavsap/comfyui-ollama",
            "files": [
                "https://github.com/stavsap/comfyui-ollama"
            ],
            "install_type": "git-clone",
            "description": "Custom ComfyUI Nodes for interacting with [a/Ollama](https://ollama.com/) using the [a/ollama python client](https://github.com/ollama/ollama-python).\nIntegrate the power of LLMs into CompfyUI workflows easily."
        },
        {
            "author": "dchatel",
            "title": "comfyui_facetools",
            "id": "facetools",
            "reference": "https://github.com/dchatel/comfyui_facetools",
            "files": [
                "https://github.com/dchatel/comfyui_facetools"
            ],
            "install_type": "git-clone",
            "description": "These custom nodes provide a rotation aware face extraction, paste back, and various face related masking options."
        },
        {
            "author": "prodogape",
            "title": "Comfyui-Minio",
            "id": "minio",
            "reference": "https://github.com/prodogape/ComfyUI-Minio",
            "files": [
                "https://github.com/prodogape/ComfyUI-Minio"
            ],
            "install_type": "git-clone",
            "description": "This plugin is mainly based on Minio, implementing the ability to read images from Minio, save images, facilitating expansion and connection across multiple machines."
        },
        {
            "author": "kingzcheung",
            "title": "ComfyUI_kkTranslator_nodes",
            "id": "kktranslator",
            "reference": "https://github.com/AIGCTeam/ComfyUI_kkTranslator_nodes",
            "files": [
                "https://github.com/AIGCTeam/ComfyUI_kkTranslator_nodes"
            ],
            "install_type": "git-clone",
            "description": "These nodes are mainly used to translate prompt words from other languages into English. PromptTranslateToText implements prompt word translation based on Helsinki NLP translation model.It doesn't require internet connection。"
        },
        {
            "author": "vsevolod-oparin",
            "title": "Kandinsky 2.2 ComfyUI Plugin",
            "id": "kandinsky",
            "reference": "https://github.com/vsevolod-oparin/comfyui-kandinsky22",
            "files": [
                "https://github.com/vsevolod-oparin/comfyui-kandinsky22"
            ],
            "install_type": "git-clone",
            "description": "Nodes provide an options to combine prior and decoder models of Kandinsky 2.2."
        },
        {
            "author": "Xyem",
            "title": "Xycuno Oobabooga",
            "id": "xycuno-oobabooga",
            "reference": "https://github.com/Xyem/Xycuno-Oobabooga",
            "files": [
                "https://github.com/Xyem/Xycuno-Oobabooga"
            ],
            "install_type": "git-clone",
            "description": "Xycuno Oobabooga provides custom nodes for ComfyUI, for sending requests to an [a/Oobabooga](https://github.com/oobabooga/text-generation-webui) instance to assist in creating prompt texts."
        },
        {
            "author": "shi3z",
            "title": "ComfyUI_Memeplex_DALLE",
            "id": "memeplex-dalle",
            "reference": "https://github.com/shi3z/ComfyUI_Memeplex_DALLE",
            "files": [
                "https://github.com/shi3z/ComfyUI_Memeplex_DALLE"
            ],
            "install_type": "git-clone",
            "description": "You can use memeplex and DALL-E thru ComfyUI. You need API keys."
        },
        {
            "author": "if-ai",
            "title": "ComfyUI-IF_AI_tools",
            "id": "if-ai-tools",
            "reference": "https://github.com/if-ai/ComfyUI-IF_AI_tools",
            "files": [
                "https://github.com/if-ai/ComfyUI-IF_AI_tools"
            ],
            "install_type": "git-clone",
            "description": "Various AI tools to use in Comfy UI. Starting with VL and prompt making tools using Ollma as backend will evolve as I find time."
        },
        {
            "author": "if-ai",
            "title": "ComfyUI-IF_AI_WishperSpeechNode",
            "id": "whisper-speech",
            "reference": "https://github.com/if-ai/ComfyUI-IF_AI_WishperSpeechNode",
            "files": [
                "https://github.com/if-ai/ComfyUI-IF_AI_WishperSpeechNode"
            ],
            "install_type": "git-clone",
            "description": "This repository hosts a Text-to-Speech (TTS) application that leverages Whisper Speech for voice synthesis, allowing users to train a voice model on-the-fly. It is built on ComfyUI and supports rapid training and inference processes."
        },
        {
            "author": "dmMaze",
            "title": "Sketch2Manga",
            "id": "sketch2manga",
            "reference": "https://github.com/dmMaze/sketch2manga",
            "files": [
                "https://github.com/dmMaze/sketch2manga"
            ],
            "install_type": "git-clone",
            "description": "Apply screentone to line drawings or colored illustrations with diffusion models."
        },
        {
            "author": "olduvai-jp",
            "title": "ComfyUI-HfLoader",
            "id": "hfloader",
            "reference": "https://github.com/olduvai-jp/ComfyUI-HfLoader",
            "files": [
                "https://github.com/olduvai-jp/ComfyUI-HfLoader"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Lora Loader From HF"
        },
        {
            "author": "AiMiDi",
            "title": "ComfyUI-Aimidi-nodes",
            "id": "aimidi-nodes",
            "reference": "https://github.com/AiMiDi/ComfyUI-Aimidi-nodes",
            "files": [
                "https://github.com/AiMiDi/ComfyUI-Aimidi-nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Merge Tag, Clear Tag, Add Tag, Load Images Pair Batch, Save Images Pair"
        },
        {
            "author": "ForeignGods",
            "title": "ComfyUI-Mana-Nodes",
            "id": "mana-nodes",
            "reference": "https://github.com/ForeignGods/ComfyUI-Mana-Nodes",
            "files": [
                "https://github.com/ForeignGods/ComfyUI-Mana-Nodes"
            ],
            "install_type": "git-clone",
            "description": "Font Animation, Speech Recognition, Caption Generator, TTS"
        },
        {
            "author": "Cornea Valentin",
            "title": "ControlNet Auxiliar",
            "id": "controlnet-aux-valentin",
            "reference": "https://github.com/madtunebk/ComfyUI-ControlnetAux",
            "files": [
                "https://github.com/madtunebk/ComfyUI-ControlnetAux"
            ],
            "install_type": "git-clone",
            "description": "This ComfyUI custom node, named ControlNet Auxiliar, is designed to provide auxiliary functionalities for image processing tasks. It is particularly useful for various image manipulation and enhancement operations. The node is integrated with functionalities for converting images between different formats and applying various image processing techniques."
        },
        {
            "author": "MarkoCa1",
            "title": "ComfyUI_Text",
            "reference": "https://github.com/MarkoCa1/ComfyUI-Text",
            "files": [
                "https://github.com/MarkoCa1/ComfyUI-Text"
            ],
            "install_type": "git-clone",
            "description": "Text."
        },
        {
            "author": "MarkoCa1",
            "title": "ComfyUI_Segment_Mask",
            "id": "seg-mask",
            "reference": "https://github.com/MarkoCa1/ComfyUI_Segment_Mask",
            "files": [
                "https://github.com/MarkoCa1/ComfyUI_Segment_Mask"
            ],
            "install_type": "git-clone",
            "description": "Mask cutout based on Segment Anything."
        },
        {
            "author": "Shadetail",
            "title": "Eagleshadow Custom Nodes",
            "id": "eagleshadow",
            "reference": "https://github.com/Shadetail/ComfyUI_Eagleshadow",
            "files": [
                "https://github.com/Shadetail/ComfyUI_Eagleshadow"
            ],
            "install_type": "git-clone",
            "description": "Custom nodes for ComfyUI by Eagleshadow."
        },
        {
            "author": "ArdeniusAI",
            "title": "CPlus_Ardenius ComfyUI Control Box",
            "id": "controlbox",
            "reference": "https://github.com/ArdeniusAI/CPlus_Ardenius",
            "files": [
                "https://github.com/ArdeniusAI/CPlus_Ardenius"
            ],
            "install_type": "git-clone",
            "description": "1 node to have control over your workflow."
        },
        {
            "author": "Jannchie",
            "title": "ComfyUI-J",
            "reference": "https://github.com/Jannchie/ComfyUI-J",
            "files": [
                "https://github.com/Jannchie/ComfyUI-J"
            ],
            "install_type": "git-clone",
            "description": "This is a completely different set of nodes than Comfy's own KSampler series. This set of nodes is based on Diffusers, which makes it easier to import models, apply prompts with weights, inpaint, reference only, controlnet, etc."
        },
        {
            "author": "daxcay",
            "title": "ComfyUI-JDCN",
            "id": "jdcn",
            "reference": "https://github.com/daxcay/ComfyUI-JDCN",
            "files": [
                "https://github.com/daxcay/ComfyUI-JDCN"
            ],
            "install_type": "git-clone",
            "description": "Jerry Davos Custom Nodes for Saving Latents in Directory (BatchLatentSave) , Importing Latent from directory (BatchLatentLoadFromDir) , List to string, string to list, get any file list from directory which give filepath, filename, move any files from any directory to any other directory, VHS Video combine file mover, rebatch list of strings, batch image load from any dir, load image batch from any directory and other custom nodes."
        },
        {
            "author": "daxcay",
            "title": "ComfyUI-DRMN",
            "id": "drmn",
            "reference": "https://github.com/daxcay/ComfyUI-DRMN",
            "files": [
                "https://github.com/daxcay/ComfyUI-DRMN"
            ],
            "install_type": "git-clone",
            "description": "Data Research And Manipulators Nodes for Model Trainers, Artists, Designers and Animators. Captions, Visualizer, Text Manipulator"
        },
        {
            "author": "Seedsa",
            "title": "ComfyUI Fooocus Nodes",
            "id": "fooocus-nodes",
            "reference": "https://github.com/Seedsa/Fooocus_Nodes",
            "files": [
                "https://github.com/Seedsa/Fooocus_Nodes"
            ],
            "install_type": "git-clone",
            "description": "This extension provides image generation features based on Fooocus."
        },
        {
            "author": "zhangp365",
            "title": "zhangp365/Some Utils for ComfyUI",
            "reference": "https://github.com/zhangp365/ComfyUI-utils-nodes",
            "files": [
                "https://github.com/zhangp365/ComfyUI-utils-nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes:LoadImageWithSwitch, ImageBatchOneOrMore, ConcatText, ModifyTextGender"
        },
        {
            "author": "ratulrafsan",
            "title": "Comfyui-SAL-VTON",
            "id": "sal-vton",
            "reference": "https://github.com/ratulrafsan/Comfyui-SAL-VTON",
            "files": [
                "https://github.com/ratulrafsan/Comfyui-SAL-VTON"
            ],
            "install_type": "git-clone",
            "description": "Dressup your models!\nThis is my quick implementation of the SAL-VTON node for ComfyUI.\nBased on the paper [a/Keyu Y. Tingwei G. et al. (2023). Linking Garment with Person via Semantically Associated Landmakrs for Virtual Try-On](https://openaccess.thecvf.com/content/CVPR2023/papers/Yan_Linking_Garment_With_Person_via_Semantically_Associated_Landmarks_for_Virtual_CVPR_2023_paper.pdf)"
        },
        {
            "author": "Nevysha",
            "title": "ComfyUI-nevysha-top-menu",
            "id": "nevysha-top-menu",
            "reference": "https://github.com/Nevysha/ComfyUI-nevysha-top-menu",
            "files": [
                "https://github.com/Nevysha/ComfyUI-nevysha-top-menu"
            ],
            "install_type": "git-clone",
            "description": "A simple sidebar tweak to force fixe the ComfyUI menu to the top of the screen. Reaaally quick and dirty. May break with some ComfyUI setup."
        },
        {
            "author": "alisson-anjos",
            "title": "ComfyUI-Ollama-Describer",
            "id": "ollama-describer",
            "reference": "https://github.com/alisson-anjos/ComfyUI-Ollama-Describer",
            "files": [
                "https://github.com/alisson-anjos/ComfyUI-Ollama-Describer"
            ],
            "install_type": "git-clone",
            "description": "This is an extension for ComfyUI that makes it possible to use some LLM models provided by Ollama, such as Gemma, Llava (multimodal), Llama2, Llama3 or Mistral. Speaking specifically of the LLaVa - Large Language and Vision Assistant model, although trained on a relatively small dataset, it demonstrates exceptional capabilities in understanding images and answering questions about them. This model presents similar behaviors to multimodal models such as GPT-4, even when presented with invisible images and instructions."
        },
        {
            "author": "chaosaiart",
            "title": "Chaosaiart-Nodes",
            "id": "chaosaiart",
            "reference": "https://github.com/chaosaiart/Chaosaiart-Nodes",
            "files": [
                "https://github.com/chaosaiart/Chaosaiart-Nodes"
            ],
            "install_type": "git-clone",
            "description": "LowVRAM Animation : txt2video - img2video - video2video , Frame by Frame, compatible with LowVRAM GPUs\nIncluded : Prompt Switch, Checkpoint Switch, Cache, Number Count by Frame, Ksampler txt2img & img2img ..."
        },
        {
            "author": "viperyl",
            "title": "ComfyUI-BiRefNet",
            "id": "birefnet",
            "reference": "https://github.com/viperyl/ComfyUI-BiRefNet",
            "files": [
                "https://github.com/viperyl/ComfyUI-BiRefNet"
            ],
            "install_type": "git-clone",
            "description": "Bilateral Reference Network achieves SOTA result in multi Salient Object Segmentation dataset, this repo pack BiRefNet as ComfyUI nodes, and make this SOTA model easier use for everyone."
        },
        {
            "author": "SuperBeastsAI",
            "title": "ComfyUI-SuperBeasts",
            "id": "superbeasts",
            "reference": "https://github.com/SuperBeastsAI/ComfyUI-SuperBeasts",
            "files": [
                "https://github.com/SuperBeastsAI/ComfyUI-SuperBeasts"
            ],
            "install_type": "git-clone",
            "description": "Nodes:HDR Effects (SuperBeasts.AI). This repository contains custom nodes for ComfyUI created and used by SuperBeasts.AI (@SuperBeasts.AI on Instagram)"
        },
        {
            "author": "hay86",
            "title": "ComfyUI Dreamtalk",
            "id": "dreamtalk",
            "reference": "https://github.com/hay86/ComfyUI_Dreamtalk",
            "files": [
                "https://github.com/hay86/ComfyUI_Dreamtalk"
            ],
            "install_type": "git-clone",
            "description": "Unofficial implementation of [a/dreamtalk](https://github.com/ali-vilab/dreamtalk) for ComfyUI"
        },
        {
            "author": "hay86",
            "title": "ComfyUI OpenVoice",
            "id": "openvoice-hay86",
            "reference": "https://github.com/hay86/ComfyUI_OpenVoice",
            "files": [
                "https://github.com/hay86/ComfyUI_OpenVoice"
            ],
            "install_type": "git-clone",
            "description": "Unofficial implementation of [a/OpenVoice](https://github.com/myshell-ai/OpenVoice) for ComfyUI"
        },
        {
            "author": "hay86",
            "title": "ComfyUI DDColor",
            "id": "ddcolor-hay86",
            "reference": "https://github.com/hay86/ComfyUI_DDColor",
            "files": [
                "https://github.com/hay86/ComfyUI_DDColor"
            ],
            "install_type": "git-clone",
            "description": "Unofficial implementation of [a/DDColor](https://github.com/piddnad/DDColor) for ComfyUI"
        },
        {
            "author": "hay86",
            "title": "ComfyUI MiniCPM-V",
            "id": "minicpm-v",
            "reference": "https://github.com/hay86/ComfyUI_MiniCPM-V",
            "files": [
                "https://github.com/hay86/ComfyUI_MiniCPM-V"
            ],
            "install_type": "git-clone",
            "description": "Unofficial implementation of [a/MiniCPM-V](https://github.com/OpenBMB/MiniCPM-V) for ComfyUI"
        },
        {
            "author": "hay86",
            "title": "ComfyUI AceNodes",
            "reference": "https://github.com/hay86/ComfyUI_AceNodes",
            "files": [
                "https://github.com/hay86/ComfyUI_AceNodes"
            ],
            "install_type": "git-clone",
            "description": "Some useful custom nodes that are not included in ComfyUI core yet."
        },
        {
            "author": "shinich39",
            "title": "comfyui-load-image-in-seq",
            "reference": "https://github.com/shinich39/comfyui-load-image-in-seq",
            "files": [
                "https://github.com/shinich39/comfyui-load-image-in-seq"
            ],
            "install_type": "git-clone",
            "description": "This node is load png image sequentially with metadata. Only supported for PNG format that has been created by ComfyUI.[w/renamed from comfyui-load-image-39. You need to remove previous one and reinstall to this.]"
        },
        {
            "author": "shinich39",
            "title": "comfyui-random-node-39",
            "reference": "https://github.com/shinich39/comfyui-ramdom-node-39",
            "files": [
                "https://github.com/shinich39/comfyui-ramdom-node-39"
            ],
            "install_type": "git-clone",
            "description": "Choose random node."
        },
        {
            "author": "shinich39",
            "title": "comfyui-local-db",
            "reference": "https://github.com/shinich39/comfyui-local-db",
            "files": [
                "https://github.com/shinich39/comfyui-local-db"
            ],
            "install_type": "git-clone",
            "description": "Store text to Key-Values pair json."
        },
        {
            "author": "wei30172",
            "title": "comfygen",
            "reference": "https://github.com/wei30172/comfygen",
            "files": [
                "https://github.com/wei30172/comfygen"
            ],
            "install_type": "git-clone",
            "description": "Setting Up a Web Interface Using ComfyUI.\nNOTE:When installed, you can access it via http://127.0.0.1:8188/comfygen."
        },
        {
            "author": "zombieyang",
            "title": "SD-PPP",
            "reference": "https://github.com/zombieyang/sd-ppp",
            "files": [
                "https://github.com/zombieyang/sd-ppp"
            ],
            "install_type": "git-clone",
            "description": "!!Another custom node about Photoshop!! PPP means interoP with your PhotoshoP. You can get or send layers from/to your Photoshop. This custom node is easier to use."
        },
        {
            "author": "KytraScript",
            "title": "ComfyUI_KytraWebhookHTTP",
            "reference": "https://github.com/KytraScript/ComfyUI_KytraWebhookHTTP",
            "files": [
                "https://github.com/KytraScript/ComfyUI_KytraWebhookHTTP"
            ],
            "install_type": "git-clone",
            "description": "A ComfyUI node that utilizes Moviepy to convert and send your images or videos to a webhook endpoint directly from ComfyUI."
        },
        {
            "author": "1mckw",
            "title": "Comfyui-Gelbooru",
            "reference": "https://github.com/1mckw/Comfyui-Gelbooru",
            "files": [
                "https://github.com/1mckw/Comfyui-Gelbooru"
            ],
            "install_type": "git-clone",
            "description": "Get random images from gelbooru, support multiple tag searches, exclude tags, etc. user and api key are optional."
        },
        {
            "author": "NeuralSamurAI",
            "title": "SuperPrompter Node for ComfyUI",
            "reference": "https://github.com/NeuralSamurAI/Comfyui-Superprompt-Unofficial",
            "files": [
                "https://github.com/NeuralSamurAI/Comfyui-Superprompt-Unofficial"
            ],
            "install_type": "git-clone",
            "description": "The SuperPrompter node is a ComfyUI node that uses the SuperPrompt-v1 model from Hugging Face to generate text based on a given prompt. It provides various parameters to control the text generation process."
        },
        {
            "author": "MokkaBoss1",
            "title": "Node Pack mostly for manipulating strings and integers",
            "reference": "https://github.com/MokkaBoss1/ComfyUI_Mokkaboss1/wiki/Documentation-for-the-ComfyUI-Nodes-in-this-Node-Pack",
            "files": [
                "https://github.com/MokkaBoss1/ComfyUI_Mokkaboss1"
            ],
            "install_type": "git-clone",
            "description": "Node Pack mostly for manipulating strings and integers"
        },
        {
            "author": "jiaxiangc",
            "title": "ResAdapter for ComfyUI",
            "reference": "https://github.com/jiaxiangc/ComfyUI-ResAdapter",
            "files": [
                "https://github.com/jiaxiangc/ComfyUI-ResAdapter"
            ],
            "install_type": "git-clone",
            "description": "We provide ComfyUI-ResAdapter node to help users to use [a/ResAdapter](https://github.com/bytedance/res-adapter) in ComfyUI."
        },
        {
            "author": "ParisNeo",
            "title": "lollms_nodes_suite",
            "reference": "https://github.com/ParisNeo/lollms_nodes_suite",
            "files": [
                "https://github.com/ParisNeo/lollms_nodes_suite"
            ],
            "install_type": "git-clone",
            "description": "lollms_nodes_suite is a set of nodes for comfyui that harnesses the power of lollms, a state-of-the-art AI text generation tool, to improve the quality of image generation."
        },
        {
            "author": "IsItDanOrAi",
            "title": "ComfyUI-Stereopsis",
            "reference": "https://github.com/IsItDanOrAi/ComfyUI-Stereopsis",
            "files": [
                "https://github.com/IsItDanOrAi/ComfyUI-Stereopsis"
            ],
            "install_type": "git-clone",
            "description": "This initiative represents a solo venture dedicated to integrating a stereopsis effect within ComfyUI (Stable Diffusion). Presently, the project is focused on the refinement of node categorization within a unified framework, as it is in the early stages of development. However, it has achieved functionality in a fundamental capacity. By processing a video through the Side-by-Side (SBS) node and applying Frame Delay to one of the inputs, it facilitates the creation of a stereopsis effect. This effect is compatible with any Virtual Reality headset that supports SBS video playback, offering a practical application in immersive media experiences."
        },
        {
            "author": "nickve28",
            "title": "ComfyUI Nich Utils",
            "reference": "https://github.com/nickve28/ComfyUI-Nich-Utils",
            "files": [
                "https://github.com/nickve28/ComfyUI-Nich-Utils"
            ],
            "install_type": "git-clone",
            "description": "Several utility nodes for use with ComfyUI."
        },
        {
            "author": "FrankChieng",
            "title": "ComfyUI_Aniportrait",
            "reference": "https://github.com/frankchieng/ComfyUI_Aniportrait",
            "files": [
                "https://github.com/frankchieng/ComfyUI_Aniportrait"
            ],
            "install_type": "git-clone",
            "description": "implementation of [a/AniPortrait](https://github.com/Zejun-Yang/AniPortrait) generating of videos, includes self driven, face reenacment and audio driven with a reference image"
        },
        {
            "author": "FrankChieng",
            "title": "ComfyUI_MagicClothing",
            "reference": "https://github.com/frankchieng/ComfyUI_MagicClothing",
            "files": [
                "https://github.com/frankchieng/ComfyUI_MagicClothing"
            ],
            "install_type": "git-clone",
            "description": "implementation of MagicClothing with garment and prompt in ComfyUI"
        },
        {
            "author": "BlakeOne",
            "title": "ComfyUI SchedulerMixer",
            "reference": "https://github.com/BlakeOne/ComfyUI-SchedulerMixer",
            "files": [
                "https://github.com/BlakeOne/ComfyUI-SchedulerMixer"
            ],
            "install_type": "git-clone",
            "description": "Create a custom scheduler from a weighted average of the built-in schedulers"
        },
        {
            "author": "BlakeOne",
            "title": "ComfyUI CustomScheduler",
            "reference": "https://github.com/BlakeOne/ComfyUI-CustomScheduler",
            "files": [
                "https://github.com/BlakeOne/ComfyUI-CustomScheduler"
            ],
            "install_type": "git-clone",
            "description": "Simple node for setting the sigma values directly. Note, for a full denoise the last sigma should be zero."
        },
        {
            "author": "BlakeOne",
            "title": "ComfyUI NodePresets",
            "reference": "https://github.com/BlakeOne/ComfyUI-NodePresets",
            "files": [
                "https://github.com/BlakeOne/ComfyUI-NodePresets"
            ],
            "install_type": "git-clone",
            "description": "An extension for ComyUI that enables saving and loading node presets using the node's context menu.\nRight click a node and choose 'Presets' from its context menu to access the node's presets."
        },
        {
            "author": "BlakeOne",
            "title": "ComfyUI NodeReset",
            "reference": "https://github.com/BlakeOne/ComfyUI-NodeReset",
            "files": [
                "https://github.com/BlakeOne/ComfyUI-NodeReset"
            ],
            "install_type": "git-clone",
            "description": "An extension for ComyUI to allow resetting a node's inputs to their default values.\nNOTE:Right click any node and choose 'Reset' from the context menu."
        },
        {
            "author": "kale4eat",
            "title": "ComfyUI_demucus",
            "reference": "https://github.com/kale4eat/ComfyUI-path-util",
            "files": [
                "https://github.com/kale4eat/ComfyUI-path-util"
            ],
            "install_type": "git-clone",
            "description": "Path utility for ComfyUI"
        },
        {
            "author": "kale4eat",
            "title": "ComfyUI-string-util",
            "reference": "https://github.com/kale4eat/ComfyUI-string-util",
            "files": [
                "https://github.com/kale4eat/ComfyUI-string-util"
            ],
            "install_type": "git-clone",
            "description": "String utility for ComfyUI"
        },
        {
            "author": "kale4eat",
            "title": "ComfyUI-text-file-util",
            "reference": "https://github.com/kale4eat/ComfyUI-text-file-util",
            "files": [
                "https://github.com/kale4eat/ComfyUI-text-file-util"
            ],
            "install_type": "git-clone",
            "description": "Text file utility for ComfyUI"
        },
        {
            "author": "kale4eat",
            "title": "ComfyUI-speech-dataset-toolkit",
            "reference": "https://github.com/kale4eat/ComfyUI-speech-dataset-toolkit",
            "files": [
                "https://github.com/kale4eat/ComfyUI-speech-dataset-toolkit"
            ],
            "install_type": "git-clone",
            "description": "Basic audio tools using torchaudio for ComfyUI. It is assumed to assist in the speech dataset creation for ASR, TTS, etc."
        },
        {
            "author": "DrMWeigand",
            "title": "ComfyUI Color Detection Nodes",
            "reference": "https://github.com/DrMWeigand/ComfyUI_ColorImageDetection",
            "files": [
                "https://github.com/DrMWeigand/ComfyUI_ColorImageDetection"
            ],
            "install_type": "git-clone",
            "description": "A collection of nodes for detecting color in images, leveraging RGB and LAB color spaces. These nodes aim to distinguish colored images from black and white, including those with color tints."
        },
        {
            "author": "bobmagicii",
            "title": "ComfyKit Custom Nodes",
            "reference": "https://github.com/bobmagicii/comfykit-custom-nodes",
            "files": [
                "https://github.com/bobmagicii/comfykit-custom-nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes:LoraWithMetadata, TypecasterImage."
        },
        {
            "author": "TJ16th",
            "title": "comfyUI_TJ_NormalLighting",
            "reference": "https://github.com/TJ16th/comfyUI_TJ_NormalLighting",
            "files": [
                "https://github.com/TJ16th/comfyUI_TJ_NormalLighting"
            ],
            "install_type": "git-clone",
            "description": "Custom Node for comfyUI for virtual lighting based on normal map.\nYou can use normal maps to add virtual lighting effects to your images."
        },
        {
            "author": "AppleBotzz",
            "title": "ComfyUI_LLMVISION",
            "reference": "https://github.com/AppleBotzz/ComfyUI_LLMVISION",
            "files": [
                "https://github.com/AppleBotzz/ComfyUI_LLMVISION"
            ],
            "install_type": "git-clone",
            "description": "This repository provides integration of GPT-4 and Claude 3 models into ComfyUI, allowing for both image and text-based interactions within the ComfyUI workflow."
        },
        {
            "author": "A4P7J1N7M05OT",
            "title": "ComfyUI-PixelOE",
            "reference": "https://github.com/A4P7J1N7M05OT/ComfyUI-PixelOE",
            "files": [
                "https://github.com/A4P7J1N7M05OT/ComfyUI-PixelOE"
            ],
            "install_type": "git-clone",
            "description": "A barebones ComfyUI wrapper for [a/PixelOE](https://github.com/KohakuBlueleaf/PixelOE).\nI cannot promise any support, if there is someone who wants to make a proper node, please do."
        },
        {
            "author": "A4P7J1N7M05OT",
            "title": "ComfyUI-AutoColorGimp",
            "reference": "https://github.com/A4P7J1N7M05OT/ComfyUI-AutoColorGimp",
            "files": [
                "https://github.com/A4P7J1N7M05OT/ComfyUI-AutoColorGimp"
            ],
            "install_type": "git-clone",
            "description": "Shamelessly copied the code to auto color correct the image like in gimp from this answer: [a/https://stackoverflow.com/a/56365560/4561887](https://stackoverflow.com/a/56365560/4561887)"
        },
        {
            "author": "ronniebasak",
            "title": "ComfyUI-Tara-LLM-Integration",
            "id": "tarallm",
            "reference": "https://github.com/ronniebasak/ComfyUI-Tara-LLM-Integration",
            "files": [
                "https://github.com/ronniebasak/ComfyUI-Tara-LLM-Integration"
            ],
            "install_type": "git-clone",
            "description": "Tara is a powerful node for ComfyUI that integrates Large Language Models (LLMs) to enhance and automate workflow processes. With Tara, you can create complex, intelligent workflows that refine and generate content, manage API keys, and seamlessly integrate various LLMs into your projects."
        },
        {
            "author": "Sida Liu",
            "title": "ComfyUI-Debug",
            "id": "debug",
            "reference": "https://github.com/liusida/ComfyUI-Debug",
            "files": [
                "https://github.com/liusida/ComfyUI-Debug"
            ],
            "install_type": "git-clone",
            "description": "Attach a debug node to an output to obtain more detailed information. Uncover the details of your models in ComfyUI with ease."
        },
        {
            "author": "Sida Liu",
            "title": "ComfyUI-Login",
            "id": "login",
            "reference": "https://github.com/liusida/ComfyUI-Login",
            "files": [
                "https://github.com/liusida/ComfyUI-Login"
            ],
            "install_type": "git-clone",
            "description": "A simple password to protect ComfyUI."
        },
        {
            "author": "Sida Liu",
            "title": "ComfyUI-AutoCropFaces",
            "id": "autocropfaces",
            "reference": "https://github.com/liusida/ComfyUI-AutoCropFaces",
            "files": [
                "https://github.com/liusida/ComfyUI-AutoCropFaces"
            ],
            "install_type": "git-clone",
            "description": "Use RetinaFace to detect and automatically crop faces."
        },
        {
            "author": "jtydhr88",
            "title": "ComfyUI-Workflow-Encrypt",
            "id": "workflow-encrypt",
            "reference": "https://github.com/jtydhr88/ComfyUI-Workflow-Encrypt",
            "files": [
                "https://github.com/jtydhr88/ComfyUI-Workflow-Encrypt"
            ],
            "install_type": "git-clone",
            "description": "Encrypt your comfyui workflow, and share it with key"
        },
        {
            "author": "jtydhr88",
            "title": "ComfyUI-InstantMesh",
            "id": "instant-mesh",
            "reference": "https://github.com/jtydhr88/ComfyUI-InstantMesh",
            "files": [
                "https://github.com/jtydhr88/ComfyUI-InstantMesh"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI InstantMesh is custom nodes that running TencentARC/InstantMesh into ComfyUI, this extension depends on ComfyUI-3D-Pack. Please refer to Readme carefully to install."
        },
        {
            "author": "jtydhr88",
            "title": "ComfyUI LayerDivider",
            "id": "layer-divider",
            "reference": "https://github.com/jtydhr88/ComfyUI-LayerDivider",
            "files": [
                "https://github.com/jtydhr88/ComfyUI-LayerDivider"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI LayerDivider is custom nodes that generating layered psd files inside ComfyUI[w/Please follow readme and run install_windows_portable_win_py311_cu121 for ComfyUI embedded python.]"
        },
        {
            "author": "SeaArtLab",
            "title": "ComfyUI-Long-CLIP",
            "reference": "https://github.com/SeaArtLab/ComfyUI-Long-CLIP",
            "files": [
                "https://github.com/SeaArtLab/ComfyUI-Long-CLIP"
            ],
            "install_type": "git-clone",
            "description": "This project implements the comfyui for long-clip, currently supporting the replacement of clip-l. For SD1.5, the SeaArtLongClip module can be used to replace the original clip in the model, expanding the token length from 77 to 248."
        },
        {
            "author": "tsogzark",
            "title": "ComfyUI-load-image-from-url",
            "reference": "https://github.com/tsogzark/ComfyUI-load-image-from-url",
            "files": [
                "https://github.com/tsogzark/ComfyUI-load-image-from-url"
            ],
            "install_type": "git-clone",
            "description": "A simple node to load image from local path or http url.\nYou can find this node from 'image' category."
        },
        {
            "author": "discus0434",
            "title": "ComfyUI Caching Embeddings",
            "id": "caching-embeddings",
            "reference": "https://github.com/discus0434/comfyui-caching-embeddings",
            "files": [
                "https://github.com/discus0434/comfyui-caching-embeddings"
            ],
            "install_type": "git-clone",
            "description": "This repository simply caches the CLIP embeddings and subtly accelerates the inference process by bypassing unnecessary computations."
        },
        {
            "author": "AIFSH",
            "title": "ComfyUI-UVR5",
            "id": "uvr5",
            "reference": "https://github.com/AIFSH/ComfyUI-UVR5",
            "files": [
                "https://github.com/AIFSH/ComfyUI-UVR5"
            ],
            "install_type": "git-clone",
            "description": "the custom code for [a/UVR5](https://github.com/Anjok07/ultimatevocalremovergui) to separate vocals and background music"
        },
        {
            "author": "AIFSH",
            "title": "ComfyUI-IP_LAP",
            "id": "iplap",
            "reference": "https://github.com/AIFSH/ComfyUI-IP_LAP",
            "files": [
                "https://github.com/AIFSH/ComfyUI-IP_LAP"
            ],
            "install_type": "git-clone",
            "description": "Nodes:IP_LAP Node, Video Loader, PreView Video, Combine Audio Video. the comfyui custom node of [a/IP_LAP](https://github.com/Weizhi-Zhong/IP_LAP) to make audio driven videos!"
        },
        {
            "author": "AIFSH",
            "title": "ComfyUI-GPT_SoVITS",
            "id": "sovits",
            "reference": "https://github.com/AIFSH/ComfyUI-GPT_SoVITS",
            "files": [
                "https://github.com/AIFSH/ComfyUI-GPT_SoVITS"
            ],
            "install_type": "git-clone",
            "description": "a comfyui custom node for [a/GPT-SoVITS](https://github.com/RVC-Boss/GPT-SoVITS)! you can voice cloning and tts in comfyui now\n[w/NOTE:make sure ffmpeg is worked in your commandline]"
        },
        {
            "author": "AIFSH",
            "title": "ComfyUI-MuseTalk_FSH",
            "id": "musetalk-fsh",
            "reference": "https://github.com/AIFSH/ComfyUI-MuseTalk_FSH",
            "files": [
                "https://github.com/AIFSH/ComfyUI-MuseTalk_FSH"
            ],
            "install_type": "git-clone",
            "description": "the comfyui custom node of [a/MuseTalk](https://github.com/TMElyralab/MuseTalk) to make audio driven videos!"
        },
        {
            "author": "AIFSH",
            "title": "ComfyUI-WhisperX",
            "id": "whisperx",
            "reference": "https://github.com/AIFSH/ComfyUI-WhisperX",
            "files": [
                "https://github.com/AIFSH/ComfyUI-WhisperX"
            ],
            "install_type": "git-clone",
            "description": "a comfyui cuatom node for audio subtitling based on [a/whisperX](https://github.com/m-bain/whisperX.git) and [a/translators](https://github.com/UlionTse/translators)"
        },
        {
            "author": "AIFSH",
            "title": "ComfyUI-RVC",
            "id": "rvc",
            "reference": "https://github.com/AIFSH/ComfyUI-RVC",
            "files": [
                "https://github.com/AIFSH/ComfyUI-RVC"
            ],
            "install_type": "git-clone",
            "description": "a comfyui custom node for [a/Retrieval-based-Voice-Conversion-WebUI](https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI.git), you can Voice-Conversion in comfyui now!\nNOTE: make sure ffmpeg is worked in your commandline for Linux"
        },
        {
            "author": "AIFSH",
            "title": "ComfyUI-XTTS",
            "reference": "https://github.com/AIFSH/ComfyUI-XTTS",
            "id": "xtts",
            "files": [
                "https://github.com/AIFSH/ComfyUI-XTTS"
            ],
            "install_type": "git-clone",
            "description": "a custom comfyui node for [a/coqui-ai/TTS](https://github.com/coqui-ai/TTS.git)'s xtts module! support 17 languages voice cloning and tts"
        },
        {
            "author": "Koishi-Star",
            "title": "Euler-Smea-Dyn-Sampler",
            "id": "smea",
            "reference": "https://github.com/Koishi-Star/Euler-Smea-Dyn-Sampler",
            "files": [
                "https://github.com/Koishi-Star/Euler-Smea-Dyn-Sampler"
            ],
            "install_type": "git-clone",
            "description": "СomfyUI version of [a/Euler Smea Dyn Sampler](https://github.com/Koishi-Star/Euler-Smea-Dyn-Sampler). It adds samplers directly to KSampler nodes."
        },
        {
            "author": "sdfxai",
            "title": "SDFXBridgeForComfyUI - ComfyUI Custom Node for SDFX Integration",
            "id": "sdfx",
            "reference": "https://github.com/sdfxai/SDFXBridgeForComfyUI",
            "files": [
                "https://github.com/sdfxai/SDFXBridgeForComfyUI"
            ],
            "install_type": "git-clone",
            "description": "SDFXBridgeForComfyUI is a custom node designed for seamless integration between ComfyUI and SDFX. This custom node allows users to make ComfyUI compatible with SDFX when running the ComfyUI instance on their local machines."
        },
        {
            "author": "smthemex",
            "title": "ComfyUI_ChatGLM_API",
            "id": "chatglm-api",
            "reference": "https://github.com/smthemex/ComfyUI_ChatGLM_API",
            "files": [
                "https://github.com/smthemex/ComfyUI_ChatGLM_API"
            ],
            "install_type": "git-clone",
            "description": "You can call Chatglm's API in comfyUI to translate and describe pictures, and the API similar to OpenAI."
        },
        {
            "author": "smthemex",
            "title": "ComfyUI_HiDiffusion_Pro",
            "id": "hidiffusion-pro",
            "reference": "https://github.com/smthemex/ComfyUI_HiDiffusion_Pro",
            "files": [
                "https://github.com/smthemex/ComfyUI_HiDiffusion_Pro"
            ],
            "install_type": "git-clone",
            "description": "A HiDiffusion node for ComfyUI."
        },
        {
            "author": "smthemex",
            "title": "ComfyUI_Pic2Story",
            "id": "pic2story",
            "reference": "https://github.com/smthemex/ComfyUI_Pic2Story",
            "files": [
                "https://github.com/smthemex/ComfyUI_Pic2Story"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI simple node based on BLIP method, with the function of Image to Txt."
        },
        {
            "author": "smthemex",
            "title": "ComfyUI_Llama3_8B",
            "id": "llama3-8b",
            "reference": "https://github.com/smthemex/ComfyUI_Llama3_8B",
            "files": [
                "https://github.com/smthemex/ComfyUI_Llama3_8B"
            ],
            "install_type": "git-clone",
            "description": "Llama3_8B for comfyUI， using pipeline workflow."
        },
        {
            "author": "smthemex",
            "title": "ComfyUI_ParlerTTS",
            "id": "parlertts",
            "reference": "https://github.com/smthemex/ComfyUI_ParlerTTS",
            "files": [
                "https://github.com/smthemex/ComfyUI_ParlerTTS"
            ],
            "install_type": "git-clone",
            "description": "You can call the ParlerTTS tool in comfyUI, which currently only supports English."
        },
        {
            "author": "smthemex",
            "title": "ComfyUI_Pipeline_Tool",
            "id": "pipeline-tool",
            "reference": "https://github.com/smthemex/ComfyUI_Pipeline_Tool",
            "files": [
                "https://github.com/smthemex/ComfyUI_Pipeline_Tool"
            ],
            "install_type": "git-clone",
            "description": "A tool for novice users in Chinese Mainland to call the huggingface hub and download the huggingface models."
        },
        {
            "author": "smthemex",
            "title": "ComfyUI_ID_Animator",
            "id": "id-animator",
            "reference": "https://github.com/smthemex/ComfyUI_ID_Animator",
            "files": [
                "https://github.com/smthemex/ComfyUI_ID_Animator"
            ],
            "install_type": "git-clone",
            "description": "This node allows you to use ID_Animator, the zero shot video generation model"
        },
        {
            "author": "smthemex",
            "title": "ComfyUI_CustomNet",
            "id": "customnet",
            "reference": "https://github.com/smthemex/ComfyUI_CustomNet",
            "files": [
                "https://github.com/smthemex/ComfyUI_CustomNet"
            ],
            "install_type": "git-clone",
            "description": "This node allows you to use customnet."
        },
        {
           "author": "choey",
           "title": "Comfy-Topaz",
           "id": "topaz",
           "reference": "https://github.com/choey/Comfy-Topaz",
           "files": [
               "https://github.com/choey/Comfy-Topaz"
           ],
           "install_type": "git-clone",
           "description": "Comfy-Topaz is a custom node for ComfyUI, which integrates with Topaz Photo AI to enhance (upscale, sharpen, denoise, etc.) images, allowing this traditionally asynchronous step to become a part of ComfyUI workflows.\nNOTE:Licensed installation of Topaz Photo AI"
        },
        {
            "author": "ALatentPlace",
            "title": "ComfyUI_yanc",
            "id": "yanc",
            "reference": "https://github.com/ALatentPlace/ComfyUI_yanc",
            "files": [
                "https://github.com/ALatentPlace/ComfyUI_yanc"
            ],
            "install_type": "git-clone",
            "description": "Yet Another Node Collection. Adds some useful nodes, check out the GitHub page for more details."
        },
        {
            "author": "Wicloz",
            "title": "ComfyUI-Simply-Nodes",
            "reference": "https://github.com/Wicloz/ComfyUI-Simply-Nodes",
            "files": [
                "https://github.com/Wicloz/ComfyUI-Simply-Nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Conditional LoRA Loader, Multiline Text, Text Flow Controller, Select SDXL Resolution, Random Style Prompt."
        },
        {
            "author": "wandbrandon",
            "title": "comfyui-pixel",
            "id": "pixel",
            "reference": "https://github.com/wandbrandon/comfyui-pixel",
            "files": [
                "https://github.com/wandbrandon/comfyui-pixel"
            ],
            "install_type": "git-clone",
            "description": "pixel art workshop nodes for comfyui."
        },
        {
            "author": "nullquant",
            "title": "BrushNet",
            "id": "brushnet",
            "reference": "https://github.com/nullquant/ComfyUI-BrushNet",
            "files": [
                "https://github.com/nullquant/ComfyUI-BrushNet"
            ],
            "install_type": "git-clone",
            "description": "Custom nodes for ComfyUI allow to inpaint using Brushnet: '[a/BrushNet: A Plug-and-Play Image Inpainting Model with Decomposed Dual-Branch Diffusion](https://arxiv.org/abs/2403.06976)'."
        },
        {
            "author": "pamparamm",
            "title": "Perturbed-Attention Guidance",
            "id": "pag",
            "reference": "https://github.com/pamparamm/sd-perturbed-attention",
            "files": [
                "https://github.com/pamparamm/sd-perturbed-attention"
            ],
            "install_type": "git-clone",
            "description": "Perturbed-Attention Guidance node for ComfyUI."
        },
        {
            "author": "unwdef",
            "title": "unwdef-nodes",
            "reference": "https://github.com/unwdef/unwdef-nodes-comfyui",
            "files": [
                "https://github.com/unwdef/unwdef-nodes-comfyui"
            ],
            "install_type": "git-clone",
            "description": "Custom nodes for ComfyUI by unwdef."
        },
        {
            "author": "fevre27",
            "title": "Self-Guidance nodes",
            "id": "self-guidance",
            "reference": "https://github.com/forever22777/comfyui-self-guidance",
            "files": [
                "https://github.com/forever22777/comfyui-self-guidance"
            ],
            "install_type": "git-clone",
            "description": "Unofficial ComfyUI implementation of Self-Guidance."
        },
        {
            "author": "aburahamu",
            "title": "ComfyUI-RequestPoster",
            "id": "request-poster",
            "reference": "https://github.com/aburahamu/ComfyUI-RequestsPoster",
            "files": [
                "https://github.com/aburahamu/ComfyUI-RequestsPoster"
            ],
            "install_type": "git-clone",
            "description": "This extension can send HTTP Requests. You can request image generation to StableDiffusion3 and post images to X (Twitter) and Discord."
        },
        {
            "author": "aburahamu",
            "title": "ComfyUI-IsNiceParts",
            "id": "isniceparts",
            "reference": "https://github.com/aburahamu/ComfyUI-IsNiceParts",
            "files": [
                "https://github.com/aburahamu/ComfyUI-IsNiceParts"
            ],
            "install_type": "git-clone",
            "description": "This custom node detects body parts (currently only hands) from the received image and outputs the image if the skeleton can be estimated."
        },
        {
            "author": "Sorcerio",
            "title": "MBM's Music Visualizer",
            "reference": "https://github.com/Sorcerio/MBM-Music-Visualizer",
            "files": [
                "https://github.com/Sorcerio/MBM-Music-Visualizer"
            ],
            "install_type": "git-clone",
            "description": "An image generation based music visualizer integrated into comfyanonymous/ComfyUI as custom nodes."
        },
        {
            "author": "quadmoon",
            "title": "quadmoon's ComfyUI nodes",
            "reference": "https://github.com/traugdor/ComfyUI-quadMoons-nodes",
            "files": [
                "https://github.com/traugdor/ComfyUI-quadMoons-nodes"
            ],
            "install_type": "git-clone",
            "description": "These are just some nodes I wanted and couldn't find where anyone else had made them yet."
        },
        {
            "author": "quadme7macoon",
            "title": "ComfyUI-ShadertoyGL",
            "reference": "https://github.com/e7mac/ComfyUI-ShadertoyGL",
            "files": [
                "https://github.com/e7mac/ComfyUI-ShadertoyGL"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Shadertoy, Shader, ColorChannelOffset."
        },
        {
            "author": "turkyden",
            "title": "ComfyUI-Sticker",
            "reference": "https://github.com/turkyden/ComfyUI-Sticker",
            "files": [
                "https://github.com/turkyden/ComfyUI-Sticker"
            ],
            "install_type": "git-clone",
            "description": "image to sticker"
        },
        {
            "author": "turkyden",
            "title": "ComfyUI-Comic",
            "id": "comic",
            "reference": "https://github.com/turkyden/ComfyUI-Comic",
            "files": [
                "https://github.com/turkyden/ComfyUI-Comic"
            ],
            "install_type": "git-clone",
            "description": "a comfyui plugin for image to comic"
        },
        {
            "author": "royceschultz",
            "title": "ComfyUI-TranscriptionTools",
            "id": "transcription-tools",
            "reference": "https://github.com/royceschultz/ComfyUI-TranscriptionTools",
            "files": [
                "https://github.com/royceschultz/ComfyUI-TranscriptionTools"
            ],
            "install_type": "git-clone",
            "description": "Transcribe audio and video files in ComfyUI."
        },
        {
            "author": "kunieone",
            "title": "ComfyUI_alkaid",
            "id": "alkadi",
            "reference": "https://github.com/kunieone/ComfyUI_alkaid",
            "files": [
                "https://github.com/kunieone/ComfyUI_alkaid"
            ],
            "install_type": "git-clone",
            "description": "Nodes:A_Face3DSwapper, A_FaceCrop, A_FacePaste, A_OpenPosePreprocessor, A_EmptyLatentImageLongside, A_GetImageSize, AlkaidLoader, AdapterFaceLoader, AdapterStyleLoader, ..."
        },
        {
            "author": "txt2any",
            "title": "ComfyUI-PromptOrganizer",
            "id": "prompt-organizer",
            "reference": "https://github.com/txt2any/ComfyUI-PromptOrganizer",
            "files": [
                "https://github.com/txt2any/ComfyUI-PromptOrganizer"
            ],
            "install_type": "git-clone",
            "description": "This is a custom node for ComfyUI that automatically saves your AI-generated images specifically to [a/www.txt2any.com](http://www.txt2any.com/)."
        },
        {
            "author": "kealiu",
            "title": "ComfyUI Load and Save file to S3",
            "id": "savefile-to-s3",
            "reference": "https://github.com/kealiu/ComfyUI-S3-Tools",
            "files": [
                "https://github.com/kealiu/ComfyUI-S3-Tools"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Load From S3, Save To S3."
        },
        {
            "author": "kealiu",
            "title": "ComfyUI-ZeroShot-MTrans",
            "id": "zeroshot-mtrans",
            "reference": "https://github.com/kealiu/ComfyUI-ZeroShot-MTrans",
            "files": [
                "https://github.com/kealiu/ComfyUI-ZeroShot-MTrans"
            ],
            "install_type": "git-clone",
            "description": "An unofficial ComfyUI custom node for [a/Zero-Shot Material Transfer from a Single Image](https://ttchengab.github.io/zest), Given an input image (e.g., a photo of an apple) and a single material exemplar image (e.g., a golden bowl), ZeST can transfer the gold material from the exemplar onto the apple with accurate lighting cues while making everything else consistent."
        },
        {
            "author": "kealiu",
            "title": "ComfyUI-Zero123-Porting",
            "id": "zero123-porting",
            "reference": "https://github.com/kealiu/ComfyUI-Zero123-Porting",
            "files": [
                "https://github.com/kealiu/ComfyUI-Zero123-Porting"
            ],
            "install_type": "git-clone",
            "description": "Zero-1-to-3: Zero-shot One Image to 3D Object, unofficial porting of original [Zero123](https://github.com/cvlab-columbia/zero123)"
        },
        {
            "author": "TashaSkyUp",
            "title": "ComfyUI_LiteLLM",
            "id": "litellm",
            "reference": "https://github.com/Hopping-Mad-Games/ComfyUI_LiteLLM",
            "files": [
                "https://github.com/Hopping-Mad-Games/ComfyUI_LiteLLM"
            ],
            "install_type": "git-clone",
            "description": "Nodes for interfacing with LiteLLM"
        },
        {
            "author": "AonekoSS",
            "title": "ComfyUI-SimpleCounter",
            "id": "simplecounter",
            "reference": "https://github.com/AonekoSS/ComfyUI-SimpleCounter",
            "files": [
                "https://github.com/AonekoSS/ComfyUI-SimpleCounter"
            ],
            "install_type": "git-clone",
            "description": "Node: utils/Simple Counter\nThis node is a simple counter, when pressing 'Queue Prompt' resets the count."
        },
        {
            "author": "heshengtao",
            "title": "comfyui_LLM_party",
            "id": "llm-party",
            "reference": "https://github.com/heshengtao/comfyui_LLM_party",
            "files": [
                "https://github.com/heshengtao/comfyui_LLM_party"
            ],
            "install_type": "git-clone",
            "description": "A set of block-based LLM agent node libraries designed for ComfyUI.This project aims to develop a complete set of nodes for LLM workflow construction based on comfyui. It allows users to quickly and conveniently build their own LLM workflows and easily integrate them into their existing SD workflows."
        },
        {
            "author": "VAST-AI-Research",
            "title": "Tripo for ComfyUI",
            "id": "tripo",
            "reference": "https://github.com/VAST-AI-Research/ComfyUI-Tripo",
            "files": [
                "https://github.com/VAST-AI-Research/ComfyUI-Tripo"
            ],
            "install_type": "git-clone",
            "description": "Custom nodes for using [a/Tripo](https://www.tripo3d.ai/) in ComfyUI to create 3D from text and image prompts."
        },
        {
            "author": "JettHu",
            "title": "ComfyUI_TGate",
            "id": "tgate",
            "reference": "https://github.com/JettHu/ComfyUI_TGate",
            "files": [
                "https://github.com/JettHu/ComfyUI_TGate"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI reference implementation for [a/T-GATE](https://github.com/HaozheLiu-ST/T-GATE)."
        },
        {
            "author": "JettHu",
            "title": "ComfyUI-TCD",
            "id": "tcd",
            "reference": "https://github.com/JettHu/ComfyUI-TCD",
            "files": [
                "https://github.com/JettHu/ComfyUI-TCD"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI implementation for [a/TCD](https://github.com/jabir-zheng/TCD)."
        },
        {
            "author": "sugarkwork",
            "title": "comfyui_tag_filter",
            "id": "tag-filter",
            "reference": "https://github.com/sugarkwork/comfyui_tag_fillter",
            "files": [
                "https://github.com/sugarkwork/comfyui_tag_fillter"
            ],
            "install_type": "git-clone",
            "description": "This is a custom node of ComfyUI that categorizes tags outputted by tools like WD14Tagger, filters them by each category, and returns the filtered results."
        },
        {
            "author": "Intersection98",
            "title": "ComfyUI-MX-post-processing-nodes",
            "reference": "https://github.com/Intersection98/ComfyUI_MX_post_processing-nodes",
            "files": [
                "https://github.com/Intersection98/ComfyUI_MX_post_processing-nodes"
            ],
            "install_type": "git-clone",
            "description": "A collection of post processing nodes for ComfyUI, dds image post-processing adjustment capabilities to the ComfyUI."
        },
        {
            "author": "TencentQQGYLab",
            "title": "ComfyUI-ELLA",
            "id": "ella",
            "reference": "https://github.com/TencentQQGYLab/ComfyUI-ELLA",
            "files": [
                "https://github.com/TencentQQGYLab/ComfyUI-ELLA"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI implementation for [a/ELLA](https://github.com/TencentQQGYLab/ELLA)."
        },
        {
            "author": "DarKDinDoN",
            "title": "ComfyUI Checkpoint Automatic Config",
            "id": "checkpoint-autoconfig",
            "reference": "https://github.com/DarKDinDoN/comfyui-checkpoint-automatic-config",
            "files": [
                "https://github.com/DarKDinDoN/comfyui-checkpoint-automatic-config"
            ],
            "install_type": "git-clone",
            "description": "This node was designed to help with checkpoint configuration."
        },
        {
            "author": "MinusZoneAI",
            "title": "ComfyUI-Prompt-MZ",
            "id": "prompt-mz",
            "reference": "https://github.com/MinusZoneAI/ComfyUI-Prompt-MZ",
            "files": [
                "https://github.com/MinusZoneAI/ComfyUI-Prompt-MZ"
            ],
            "install_type": "git-clone",
            "description": "Use llama.cpp to help generate some nodes for prompt word related work"
        },
        {
            "author": "MinusZoneAI",
            "title": "ComfyUI-StylizePhoto-MZ",
            "id": "stylizephoto",
            "reference": "https://github.com/MinusZoneAI/ComfyUI-StylizePhoto-MZ",
            "files": [
                "https://github.com/MinusZoneAI/ComfyUI-StylizePhoto-MZ"
            ],
            "install_type": "git-clone",
            "description": "A stylized node with simple operation. The effect is achieved by I2I and lora. The clay style is currently implemented.Comes with watermark function."
        },
        {
            "author": "blueraincoatli",
            "title": "comfyUI_SillyNodes",
            "id": "silly",
            "reference": "https://github.com/blueraincoatli/comfyUI_SillyNodes",
            "files": [
                "https://github.com/blueraincoatli/comfyUI_SillyNodes"
            ],
            "install_type": "git-clone",
            "description": "Using rgthree's fast_group_muter and bookmark nodes, introduce the pyautogui library to simulate clicks and hotkeys, and run groups in sequence. screen manipulation is involved"
        },
        {
            "author": "ty0x2333",
            "title": "ComfyUI-Dev-Utils",
            "id": "dev-utils",
            "reference": "https://github.com/ty0x2333/ComfyUI-Dev-Utils",
            "files": [
                "https://github.com/ty0x2333/ComfyUI-Dev-Utils"
            ],
            "install_type": "git-clone",
            "description": "Execution Time Analysis, Reroute Enhancement, Node collection for developers."
        },
        {
            "author": "lquesada",
            "title": "ComfyUI-Prompt-Combinator",
            "id": "prompt-combinator",
            "reference": "https://github.com/lquesada/ComfyUI-Prompt-Combinator",
            "files": [
                "https://github.com/lquesada/ComfyUI-Prompt-Combinator"
            ],
            "install_type": "git-clone",
            "description": "'🔢 Prompt Combinator' is a node that generates all possible combinations of prompts from several lists of strings.\n'🔢 Prompt Combinator Merger' is a node that enables merging the output of two different '🔢 Prompt Combinator' nodes."
        },
        {
            "author": "lquesada",
            "title": "ComfyUI-Inpaint-CropAndStitch",
            "id": "crop-and-stitch",
            "reference": "https://github.com/lquesada/ComfyUI-Inpaint-CropAndStitch",
            "files": [
                "https://github.com/lquesada/ComfyUI-Inpaint-CropAndStitch"
            ],
            "install_type": "git-clone",
            "description": "'✂️ Inpaint Crop' is a node that crops an image before sampling. The context area can be specified via the mask, expand pixels and expand factor or via a separate (optional) mask.\n'✂️ Inpaint Stitch' is a node that stitches the inpainted image back into the original image without altering unmasked areas."
        },
        {
            "author": "randjtw",
            "title": "advance-aesthetic-score",
            "reference": "https://github.com/randjtw/advance-aesthetic-score",
            "files": [
                "https://github.com/randjtw/advance-aesthetic-score"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Advance Aesthetic Score"
        },
        {
            "author": "FredBill1",
            "title": "comfyui-fb-utils",
            "id": "fb-utils",
            "reference": "https://github.com/FredBill1/comfyui-fb-utils",
            "files": [
                "https://github.com/FredBill1/comfyui-fb-utils"
            ],
            "install_type": "git-clone",
            "description": "Nodes:FBStringJoin, FBStringSplit, FBMultilineStringList, FBMultilineString"
        },
        {
            "author": "jeffy5",
            "title": "Faceless Node for ComfyUI",
            "id": "faceless",
            "reference": "https://github.com/jeffy5/comfyui-faceless-node",
            "files": [
                "https://github.com/jeffy5/comfyui-faceless-node"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Load Video, Load Frames, Save Video, Face Swap, Face Restore, Face Swap (Video), Face Restore (Video)"
        },
        {
            "author": "TaiTair",
            "title": "Simswap Node for ComfyUI",
            "id": "simswap",
            "reference": "https://github.com/TaiTair/comfyui-simswap",
            "files": [
                "https://github.com/TaiTair/comfyui-simswap"
            ],
            "install_type": "git-clone",
            "description": "A hacky implementation of Simswap based on [a/Comfyui ReActor Node 0.5.1](https://github.com/Gourieff/comfyui-reactor-node) and [a/Simswap](https://github.com/neuralchen/SimSwap)."
        },
        {
            "author": "fofr",
            "title": "ComfyUI-HyperSDXL1StepUnetScheduler (ByteDance)",
            "id": "hypersdxl",
            "reference": "https://github.com/fofr/ComfyUI-HyperSDXL1StepUnetScheduler",
            "files": [
                "https://github.com/fofr/ComfyUI-HyperSDXL1StepUnetScheduler"
            ],
            "install_type": "git-clone",
            "description": "Original author is ByteDance.\nComfyUI sampler for HyperSDXL UNet\nPorted from: [a/https://huggingface.co/ByteDance/Hyper-SD](https://huggingface.co/ByteDance/Hyper-SD)"
        },
        {
            "author": "cfreilich",
            "title": "Virtuoso Nodes for ComfyUI",
            "id": "virtuoso",
            "reference": "https://github.com/chrisfreilich/virtuoso-nodes",
            "files": [
                "https://github.com/chrisfreilich/virtuoso-nodes"
            ],
            "install_type": "git-clone",
            "description": "Photoshop type functions and adjustment layers: 30 blend modes, Selective Color, Blend If, Color Balance, Solid Color Images, Black and White, Hue/Saturation, Levels, and RGB Splitting and Merging."
        },
        {
            "author": "Shinsplat",
            "title": "ComfyUI-Shinsplat",
            "id": "shinsplat",
            "reference": "https://github.com/Shinsplat/ComfyUI-Shinsplat",
            "files": [
                "https://github.com/Shinsplat/ComfyUI-Shinsplat"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Clip Text Encode (Shinsplat), Clip Text Encode SDXL (Shinsplat), Lora Loader (Shinsplat)."
        },
        {
            "author": "da2el-ai",
            "title": "D2 Steps",
            "id": "d2steps",
            "reference": "https://github.com/da2el-ai/ComfyUI-d2-steps",
            "files": [
                "https://github.com/da2el-ai/ComfyUI-d2-steps"
            ],
            "install_type": "git-clone",
            "description": "A handy custom node for using Refiner (switching to a different checkpoint midway) When you specify the end of the base checkpoint, you can extract refiner_start which is end + 1. The output is fixed as an INT, so it can be passed to the handy custom node, Anything Everywhere? Since it only outputs a numerical value, it can also be used for other purposes."
        },
        {
            "author": "da2el-ai",
            "title": "D2 Size Selector",
            "id": "size-selector",
            "reference": "https://github.com/da2el-ai/ComfyUI-d2-size-selector",
            "files": [
                "https://github.com/da2el-ai/ComfyUI-d2-size-selector"
            ],
            "install_type": "git-clone",
            "description": "This is a custom node that allows you to easily call up and set image size presets. Settings can be made by editing the included config.yaml. It is almost identical to Comfyroll Studio's CR AspectRatio. I created it because I wanted to easily edit the presets."
        },
        {
            "author": "nat-chan",
            "title": "ComfyUI-Transceiver📡",
            "id": "transceiver",
            "reference": "https://github.com/nat-chan/comfyui-transceiver",
            "files": [
                "https://github.com/nat-chan/comfyui-transceiver"
            ],
            "install_type": "git-clone",
            "description": "Transceiver is a python library that swiftly exchanges fundamental data structures, specifically numpy arrays, between processes, optimizing AI inference tasks that utilize ComfyUI."
        },
        {
            "author": "nat-chan",
            "title": "ComfyUI-graphToPrompt",
            "id": "graph2prompt",
            "reference": "https://github.com/nat-chan/ComfyUI-graphToPrompt",
            "files": [
                "https://github.com/nat-chan/ComfyUI-graphToPrompt"
            ],
            "install_type": "git-clone",
            "description": "workflow.json -> workflow_api.json"
        },
        {
            "author": "nat-chan",
            "title": "comfyui-paint",
            "reference": "https://github.com/nat-chan/comfyui-paint",
            "files": [
                "https://github.com/nat-chan/comfyui-paint"
            ],
            "install_type": "git-clone",
            "description": "comfyui-paint"
        },
        {
            "author": "web3nomad",
            "title": "ComfyUI Invisible Watermark",
            "id": "invisible-watermark",
            "reference": "https://github.com/web3nomad/ComfyUI_Invisible_Watermark",
            "files": [
                "https://github.com/web3nomad/ComfyUI_Invisible_Watermark"
            ],
            "install_type": "git-clone",
            "description": "Nodes: InvisibleWatermarkEncode"
        },
        {
            "author": "GentlemanHu",
            "title": "ComfyUI Suno API",
            "id": "suno-api",
            "reference": "https://github.com/GentlemanHu/ComfyUI-SunoAI",
            "files": [
                "https://github.com/GentlemanHu/ComfyUI-SunoAI"
            ],
            "install_type": "git-clone",
            "description": "An unofficial Python library for [a/Suno AI](https://www.suno.ai/) API"
        },
        {
            "author": "TemryL",
            "title": "ComfyUI-IDM-VTON [WIP]",
            "id": "idm-vton",
            "reference": "https://github.com/TemryL/ComfyUI-IDM-VTON",
            "files": [
                "https://github.com/TemryL/ComfyUI-IDM-VTON"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI adaptation of [a/IDM-VTON](https://github.com/yisol/IDM-VTON) for virtual try-on."
        },
        {
            "author": "NStor",
            "title": "ComfyUI-RUS localization",
            "reference": "https://github.com/Nestorchik/NStor-ComfyUI-Translation",
            "files": [
                "https://github.com/Nestorchik/NStor-ComfyUI-Translation"
            ],
            "install_type": "git-clone",
            "description": "Russian localization of ComfyUI, ComafyUI-Manager & more..."
        },
        {
            "author": "jax-explorer",
            "title": "fast_video_comfyui",
            "reference": "https://github.com/jax-explorer/fast_video_comfyui",
            "files": [
                "https://github.com/jax-explorer/fast_video_comfyui"
            ],
            "install_type": "git-clone",
            "description": "Nodes:FastImageListToImageBatch"
        },
        {
            "author": "sugarkwork",
            "title": "comfyui_cohere",
            "reference": "https://github.com/sugarkwork/comfyui_cohere",
            "files": [
                "https://github.com/sugarkwork/comfyui_cohere"
            ],
            "install_type": "git-clone",
            "description": "This is a node for using cohere (Command R+) from ComfyUI. You need to edit the startup .bat file of ComfyUI and describe the API key obtained from Cohere as follows."
        },
        {
            "author": "alessandrozonta",
            "title": "Bounding Box Crop Node for ComfyUI",
            "reference": "https://github.com/alessandrozonta/ComfyUI-CenterNode",
            "files": [
                "https://github.com/alessandrozonta/ComfyUI-CenterNode"
            ],
            "install_type": "git-clone",
            "description": "This extension contains a custom node for ComfyUI. The node, called 'Bounding Box Crop', is designed to compute the top-left coordinates of a cropped bounding box based on input coordinates and dimensions of the final cropped image. It does so computing the center of the cropping area and then computing where the top-left coordinates would be."
        },
        {
            "author": "curiousjp",
            "title": "ComfyUI-MaskBatchPermutations",
            "reference": "https://github.com/curiousjp/ComfyUI-MaskBatchPermutations",
            "files": [
                "https://github.com/curiousjp/ComfyUI-MaskBatchPermutations"
            ],
            "install_type": "git-clone",
            "description": "Permutes a mask batch to present possible additive combinations. Passing a mask batch (e.g. out of [a/SEGS to Mask Batch](https://github.com/ltdrdata/ComfyUI-Impact-Pack)) will return a new mask batch representing all the possible combinations of the included masks. So, a mask batch with two mask sections, 'A' and 'B', will return a batch containing an empty mask, an empty mask & A, an empty mask & B, and an empty mask & A & B."
        },
        {
            "author": "BAIS1C",
            "title": "ComfyUI_RSS_Feed_Reader",
            "reference": "https://github.com/BAIS1C/ComfyUI_RSS_Feed_Reader",
            "files": [
                "https://github.com/BAIS1C/ComfyUI_RSS_Feed_Reader"
            ],
            "install_type": "git-clone",
            "description": "A Simple Python RSS Feed Reader to create Prompts in Comfy UI"
        },
        {
            "author": "runtime44",
            "title": "Runtime44 ComfyUI Nodes",
            "reference": "https://github.com/runtime44/comfyui_r44_nodes",
            "files": [
                "https://github.com/runtime44/comfyui_r44_nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes: Runtime44Upscaler, Runtime44ColorMatch, Runtime44DynamicKSampler, Runtime44ImageOverlay, Runtime44ImageResizer, Runtime44ImageToNoise, Runtime44MaskSampler, Runtime44TiledMaskSampler, Runtime44IterativeUpscaleFactor, Runtime44ImageEnhance"
        },
        {
            "author": "osiworx",
            "title": "ComfyUI_Prompt-Quill",
            "reference": "https://github.com/osi1880vr/prompt_quill_comfyui",
            "files": [
                "https://github.com/osi1880vr/prompt_quill_comfyui"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Use Prompt Quill in Comfyui"
        },
        {
            "author": "AIFSH",
            "title": "ComfyUI-FishSpeech",
            "reference": "https://github.com/AIFSH/ComfyUI-FishSpeech",
            "files": [
                "https://github.com/AIFSH/ComfyUI-FishSpeech"
            ],
            "install_type": "git-clone",
            "description": "a custom comfyui node for [a/fish-speech](https://github.com/fishaudio/fish-speech.git)"
        },
        {
            "author": "philz1337x",
            "title": "✨ Clarity AI - Creative Image Upscaler and Enhancer for ComfyUI",
            "reference": "https://github.com/philz1337x/ComfyUI-ClarityAI",
            "files": [
                "https://github.com/philz1337x/ComfyUI-ClarityAI"
            ],
            "install_type": "git-clone",
            "description": "[a/Clarity AI](https://clarityai.cc) is a creative image enhancer and is able to upscale to high resolution. [w/NOTE: This is a Magnific AI alternative for ComfyUI.] \nCreate an API key on [a/ClarityAI.cc/api](https://clarityai.cc/api) and add to environment variable 'CAI_API_KEY'\nAlternatively you can write your API key to file 'cai_platform_key.txt'\nYou can also use and/or override the above by entering your API key in the 'api_key_override' field of the node."
        },
        {
            "author": "KoreTeknology",
            "title": "ComfyUI Universal Styler",
            "id": "universal-styler",
            "reference": "https://github.com/KoreTeknology/ComfyUI-Universal-Styler",
            "files": [
                "https://github.com/KoreTeknology/ComfyUI-Universal-Styler"
            ],
            "install_type": "git-clone",
            "description": "A research Node based project on Artificial Intelligence using ComfyUI visual editor with Stable diffusion Local processing focus in mind. This custom node is intended to serve the purpose to offer a large palette of prompting scenrarios, based on Public Checkpoint Models OR/AND Private custom Models and LoRas. It includes an integrated learning machine process as well as a set of workflows."
        },
        {
            "author": "ZeDarkAdam",
            "title": "ComfyUI-Embeddings-Tools",
            "id": "embeddings-tools",
            "reference": "https://github.com/ZeDarkAdam/ComfyUI-Embeddings-Tools",
            "files": [
                "https://github.com/ZeDarkAdam/ComfyUI-Embeddings-Tools"
            ],
            "install_type": "git-clone",
            "description": "EmbeddingsNameLoader, EmbendingList"
        },
        {
            "author": "chenpx976",
            "title": "ComfyUI-RunRunRun",
            "id": "runrunrun",
            "reference": "https://github.com/chenpx976/ComfyUI-RunRunRun",
            "files": [
                "https://github.com/chenpx976/ComfyUI-RunRunRun"
            ],
            "install_type": "git-clone",
            "description": "add http api http://127.0.0.1:8188/comfyui-run/run use in other llm project."
        },
        {
            "author": "githubYiheng",
            "title": "ComfyUI_GetFileNameFromURL",
            "id": "getfilename-from-url",
            "reference": "https://github.com/githubYiheng/ComfyUI_GetFileNameFromURL",
            "files": [
                "https://github.com/githubYiheng/ComfyUI_GetFileNameFromURL"
            ],
            "install_type": "git-clone",
            "description": "GetFileNameFromURL is a ComfyUI custom node that extracts the filename from a URL. It can handle various URLs and is capable of handling redirects."
        },
        {
            "author": "githubYiheng",
            "title": "comfyui_median_filter",
            "id": "median-filter",
            "reference": "https://github.com/githubYiheng/comfyui_median_filter",
            "files": [
                "https://github.com/githubYiheng/comfyui_median_filter"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Apply Median Filter"
        },
        {
            "author": "githubYiheng",
            "title": "ComfyUI_Change_IMAGE_BOREDER",
            "id": "change-image-border",
            "reference": "https://github.com/githubYiheng/ComfyUI_Change_IMAGE_BOREDER",
            "files": [
                "https://github.com/githubYiheng/ComfyUI_Change_IMAGE_BOREDER"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Change Image Border"
        },
        {
            "author": "Fihade",
            "title": "IC-Light-ComfyUI-Node",
            "reference": "https://github.com/Fihade/IC-Light-ComfyUI-Node",
            "files": [
                "https://github.com/Fihade/IC-Light-ComfyUI-Node"
            ],
            "install_type": "git-clone",
            "description": "Original repo: [a/https://github.com/lllyasviel/IC-Light](https://github.com/lllyasviel/IC-Light)\nModels: [a/https://huggingface.co/lllyasviel/ic-light/tree/main](https://huggingface.co/lllyasviel/ic-light/tree/main), [a/https://huggingface.co/digiplay/Photon_v1/tree/main](https://huggingface.co/digiplay/Photon_v1/tree/main)\nmodels go into ComfyUI/models/unet"
        },
        {
            "author": "KewkLW",
            "title": "ComfyUI-kewky_tools",
            "id": "kewky-tools",
            "reference": "https://github.com/KewkLW/ComfyUI-kewky_tools",
            "files": [
                "https://github.com/KewkLW/ComfyUI-kewky_tools"
            ],
            "install_type": "git-clone",
            "description": "Nodes:TensorDebugPlus, FormattedTextOutput"
        },
        {
            "author": "ITurchenko",
            "title": "ComfyUI-SizeFromArray",
            "id": "sizefromarray",
            "reference": "https://github.com/ITurchenko/ComfyUI-SizeFromArray",
            "files": [
                "https://github.com/ITurchenko/ComfyUI-SizeFromArray"
            ],
            "install_type": "git-clone",
            "description": "Nodes:SizeFromArray"
        },
        {
            "author": "Suplex",
            "title": "Suplex Misc ComfyUI Nodes",
            "id": "suplex",
            "reference": "https://github.com/saftle/suplex_comfy_nodes",
            "files": [
                "https://github.com/saftle/suplex_comfy_nodes"
            ],
            "install_type": "git-clone",
            "description": "Misc Nodes: ControlNet Selector Node, Load Optional ControlNet Model"
        },
        {
            "author": "mephisto83",
            "title": "petty-paint-comfyui-node",
            "id": "petty-paint",
            "reference": "https://github.com/mephisto83/petty-paint-comfyui-node",
            "files": [
                "https://github.com/mephisto83/petty-paint-comfyui-node"
            ],
            "install_type": "git-clone",
            "description": "An integration between comfy ui and petty paint"
        },
        {
            "author": "fsdymy1024",
            "title": "ComfyUI_fsdymy",
            "id": "fsdymy",
            "reference": "https://github.com/fsdymy1024/ComfyUI_fsdymy",
            "files": [
                "https://github.com/fsdymy1024/ComfyUI_fsdymy"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Save Image Without Metadata"
        },
        {
            "author": "ray",
            "title": "Light Gradient for ComfyUI",
            "id": "light-gradient",
            "reference": "https://github.com/huagetai/ComfyUI_LightGradient",
            "files": [
                "https://github.com/huagetai/ComfyUI_LightGradient"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Image Gradient,Mask Gradient"
        },
        {
            "author": "YFG",
            "title": "😸 YFG Comical Nodes",
            "id": "comical",
            "reference": "https://github.com/gonzalu/ComfyUI_YFG_Comical",
            "files": [
                "https://github.com/gonzalu/ComfyUI_YFG_Comical"
            ],
            "install_type": "git-clone",
            "description": "Image Historgram Generator - Outputs a set of images displaying the Histogram of the input image. Nodes: img2histograms, img2histogramsSelf"
        },
        {
            "author": "ruiqutech",
            "title": "RuiquNodes for ComfyUI",
            "id": "RuiquNodes",
            "reference": "https://github.com/ruiqutech/ComfyUI-RuiquNodes",
            "files": [
                "https://github.com/ruiqutech/ComfyUI-RuiquNodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes of EvaluateMultiple1, EvaluateMultiple3...\nSupport the execution of any fragment of Python code, generating multiple outputs from multiple inputs."
        },
        {
            "author": "teward",
            "title": "ComfyUI-Helper-Nodes",
            "id": "helper-nodes",
            "reference": "https://github.com/teward/ComfyUI-Helper-Nodes",
            "files": [
                "https://github.com/teward/ComfyUI-Helper-Nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes: HelperNodes_MultilineStringLiteral, HelperNodes_StringLiteral, HelperNodes_Steps, HelperNodes_CfgScale, HelperNodes_WidthHeight, HelperNodes_SchedulerSelector, HelperNodes_SamplerSelector, ..."
        },
        {
            "author": "fmatray",
            "title": "ComfyUI_BattlemapGrid",
            "id": "battlemap-grid",
            "reference": "https://github.com/fmatray/ComfyUI_BattlemapGrid",
            "files": [
                "https://github.com/fmatray/ComfyUI_BattlemapGrid"
            ],
            "install_type": "git-clone",
            "description": "Nodes for ComfyUI in order to generate battelmaps"
        },
        {
            "author": "christian-byrne",
            "title": "img2txt-comfyui-nodes",
            "id": "img2txt-nodes",
            "reference": "https://github.com/christian-byrne/img2txt-comfyui-nodes",
            "files": [
                "https://github.com/christian-byrne/img2txt-comfyui-nodes"
            ],
            "install_type": "git-clone",
            "description": "Nodes:img2txt BLIP SalesForce Large"
        },
        {
            "author": "ray",
            "title": "Light Gradient for ComfyUI",
            "id": "light-gradient",
            "reference": "https://github.com/huagetai/ComfyUI_LightGradient",
            "files": [
                "https://github.com/huagetai/ComfyUI_LightGradient"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Image Gradient,Mask Gradient"
        },
        {
            "author": "ray",
            "title": "comfyui's gaffer(ComfyUI native implementation of IC-Light. )",
            "id": "gaffer",
            "reference": "https://github.com/huagetai/ComfyUI-Gaffer",
            "files": [
                "https://github.com/huagetai/ComfyUI-Gaffer"
            ],
            "install_type": "git-clone",
            "description": "Nodes:Load ICLight Model,Apply ICLight,Simple Light Source,Calculate Normal Map"
        },
        {
            "author": "oztrkoguz",
            "title": "ComfyUI StoryCreater",
            "id": "storycreater",
            "reference": "https://github.com/oztrkoguz/ComfyUI_StoryCreator",
            "files": [
                "https://github.com/oztrkoguz/ComfyUI_StoryCreator"
            ],
            "install_type": "git-clone",
            "description": "Nodes:story_sampler_simple, text2, kosmos2_sampler.\nI created a dataset for generating short stories [a/Short-Story](https://huggingface.co/datasets/oztrkoguz/Short-Story) and used it to fine-tune my own model using Phi-3."
        },
        {
            "author": "GraftingRayman",
            "title": "GR Prompt Selector",
            "id": "gr-prompt-selector",
            "reference": "https://github.com/GraftingRayman/ComfyUI_GraftingRayman",
            "files": [
                "https://github.com/GraftingRayman/ComfyUI_GraftingRayman"
            ],
            "install_type": "git-clone",
            "description": "Prompt and Masking nodes."
        },
        {
            "author": "royceschultz",
            "title": "ComfyUI-Notifications",
            "reference": "https://github.com/royceschultz/ComfyUI-Notifications",
            "files": [
                "https://github.com/royceschultz/ComfyUI-Notifications"
            ],
            "install_type": "git-clone",
            "description": "Send notifications when a workflow completes."
        },
        {
            "author": "katalist-ai",
            "title": "comfyUI-nsfw-detection",
            "id": "nsfw-detection",
            "reference": "https://github.com/katalist-ai/comfyUI-nsfw-detection",
            "files": [
                "https://github.com/katalist-ai/comfyUI-nsfw-detection"
            ],
            "install_type": "git-clone",
            "description": "Nodes: NudenetDetector"
        },
        {
            "author": "kaanyalova",
            "title": "Extended Image Formats for ComfyUI",
            "id": "extended-image-format",
            "reference": "https://github.com/kaanyalova/ComfyUI_ExtendedImageFormats",
            "files": [
                "https://github.com/kaanyalova/ComfyUI_ExtendedImageFormats"
            ],
            "install_type": "git-clone",
            "description": "Adds a custom node for saving images in webp, jpeg, avif, jxl (no metadata) and supports loading workflows from saved images"
        },
        {
            "author": "badayvedat",
            "title": "ComfyUI-fal-Connector",
            "id": "fal",
            "reference": "https://github.com/badayvedat/ComfyUI-fal-Connector",
            "files": [
                "https://github.com/badayvedat/ComfyUI-fal-Connector"
            ],
            "install_type": "git-clone",
            "description": "The ComfyUI-fal-Connector is a tool designed to provide an integration between ComfyUI and fal. This extension allows users to execute their ComfyUI workflows directly on [a/fal.ai](https://fal.ai/). This enables users to leverage the computational power and resources provided by fal.ai for running their ComfyUI workflows."
        },
        {
            "author": "TheMistoAI",
            "title": "Anyline",
            "id": "anyline",
            "reference": "https://github.com/TheMistoAI/ComfyUI-Anyline",
            "files": [
                "https://github.com/TheMistoAI/ComfyUI-Anyline"
            ],
            "install_type": "git-clone",
            "description": "A Fast, Accurate, and Detailed Line Detection Preprocessor.\nAnyline is a ControlNet line preprocessor that accurately extracts object edges, image details, and textual content from most images. Users can input any type of image to quickly obtain line drawings with clear edges, sufficient detail preservation, and high fidelity text, which are then used as input for conditional generation in Stable Diffusion."
        },
        {
            "author": "mbrostami",
            "title": "ComfyUI-TITrain",
            "id": "titrain",
            "reference": "https://github.com/mbrostami/ComfyUI-TITrain",
            "files": [
                "https://github.com/mbrostami/ComfyUI-TITrain"
            ],
            "install_type": "git-clone",
            "description": "Nodes:TextualInversionTrainingSDXL, TextualInversionTraining"
        },
        {
            "author": "ArcherFMY",
            "title": "Diffusion360_ComfyUI",
            "id": "diffusion360",
            "reference": "https://github.com/ArcherFMY/Diffusion360_ComfyUI",
            "files": [
                "https://github.com/ArcherFMY/Diffusion360_ComfyUI"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI plugin of [a/SD-T2I-360PanoImage](https://github.com/ArcherFMY/SD-T2I-360PanoImage).\nbase t2i-pipeline for generating 512*1024 panorama image from text input"
        },
        {
            "author": "Makeezi",
            "title": "ComfyUI-promptLAB",
            "id": "promptlab",
            "reference": "https://github.com/Makeezi/ComfyUI-promptLAB",
            "files": [
                "https://github.com/Makeezi/ComfyUI-promptLAB"
            ],
            "install_type": "git-clone",
            "description": "connection nodes for api requests, fully supports promptLAB"
        },
        {
            "author": "portu-sim",
            "title": "comfyui_bmab",
            "id": "bmab",
            "reference": "https://github.com/portu-sim/comfyui_bmab",
            "files": [
                "https://github.com/portu-sim/comfyui_bmab"
            ],
            "install_type": "git-clone",
            "description": "BMAB for ComfyUI\n[w/comfyui-bmab is changed to comfyui_bmab. Remove 'custom_nodes/comyui-bmab' in your directory and then reinstall this.]"
        },
        {
            "author": "griptape-ai",
            "title": "ComfyUI Griptape Nodes",
            "id": "griptape",
            "reference": "https://github.com/griptape-ai/ComfyUI-Griptape",
            "files": [
                "https://github.com/griptape-ai/ComfyUI-Griptape"
            ],
            "install_type": "git-clone",
            "description": "This repo creates a series of nodes that enable you to utilize the [a/Griptape Python Framework](https://github.com/griptape-ai/griptape/) with ComfyUI, integrating AI into your workflow. This repo creates a series of nodes that enable you to utilize the Griptape Python Framework with ComfyUI, integrating AI into your workflow."
        },
        {
          "author": "cavinHuang",
          "title": "comfyui-nodes-docs",
          "id": "nodedocs",
          "reference": "https://github.com/CavinHuang/comfyui-nodes-docs",
          "files": [
              "https://github.com/CavinHuang/comfyui-nodes-docs"
          ],
          "install_type": "git-clone",
          "description": "This is a plugin for displaying documentation for each comfyui node. "
        },
        {
            "author": "icesun963",
            "title": "HFDownLoad Node for ComfyUI",
            "id": "HFDownLoad-ic",
            "reference": "https://github.com/icesun963/ComfyUI_HFDownLoad",
            "files": [
                "https://github.com/icesun963/ComfyUI_HFDownLoad"
            ],
            "install_type": "git-clone",
            "description": "Download the model from huggingface and put it in any directory."
        },
        {
            "author": "conquestace",
            "title": "Image Uploader",
            "id": "image-uploader",
            "reference": "https://github.com/conquestace/ComfyUI-ImageUploader",
            "files": [
                "https://github.com/conquestace/ComfyUI-ImageUploader"
            ],
            "install_type": "git-clone",
            "description": "Upload images automatically to image hosting sites."
        },
        {
            "author": "chandlergis",
            "title": "ComfyUI-IMG_Query",
            "id": "img-query",
            "reference": "https://github.com/chandlergis/ComfyUI-IMG_Query",
            "files": [
                "https://github.com/chandlergis/ComfyUI-IMG_Query"
            ],
            "install_type": "git-clone",
            "description": "Nodes:ImageRequestNode"
        },
        {
            "author": "Isaac Emesowum",
            "title": "Isaac's Nodes",
            "id": "isaac",
            "reference": "https://github.com/iemesowum/ComfyUI_IsaacNodes",
            "files": [
                "https://github.com/iemesowum/ComfyUI_IsaacNodes"
            ],
            "install_type": "git-clone",
            "description": "This extension offers automatic drums extraction from audio files, as well as a few helper nodes to support my audio synchronization AnimateDiff workflows."
        },
        {
            "author": "fexploit",
            "title": "ComfyUI-AutoTrimBG",
            "id": "autotrimbg",
            "reference": "https://github.com/fexploit/ComfyUI-AutoTrimBG",
            "files": [
                "https://github.com/fexploit/ComfyUI-AutoTrimBG"
            ],
            "install_type": "git-clone",
            "description": "ComfyUI-AutoCropBgTrim is a powerful tool designed to automatically clean up the background of your images. This tool trims unnecessary spaces and pixels, leaving only the main subject of the image. It generates both a mask and an image output, making it easy to focus on the essential elements. Perfect for enhancing your photos and preparing them for professional use."
        },
        {
            "author": "linshier",
            "title": "comfyui-remote-tools",
            "id": "remote-tools",
            "reference": "https://github.com/linshier/comfyui-remote-tools",
            "files": [
                "https://github.com/linshier/comfyui-remote-tools"
            ],
            "install_type": "git-clone",
            "description": "Node:SendBase64ToRemote. To connect to another ComfyUI server."
        },

















        {
            "author": "Ser-Hilary",
            "title": "SDXL_sizing",
            "reference": "https://github.com/Ser-Hilary/SDXL_sizing",
            "files": [
                "https://github.com/Ser-Hilary/SDXL_sizing/raw/main/conditioning_sizing_for_SDXL.py"
            ],
            "install_type": "copy",
            "description": "Nodes:sizing_node. Size calculation node related to image size in prompts supported by SDXL."
        },
        {
            "author": "ailex000",
            "title": "Image Gallery",
            "reference": "https://github.com/ailex000/ComfyUI-Extensions",
            "js_path": "image-gallery",
            "files": [
                "https://github.com/ailex000/ComfyUI-Extensions/raw/main/image-gallery/imageGallery.js"
            ],
            "install_type": "copy",
            "description": "Custom javascript extensions for better UX for ComfyUI. Supported nodes: PreviewImage, SaveImage. Double click on image to open."
        },
        {
            "author": "rock-land",
            "title": "graphNavigator",
            "reference": "https://github.com/rock-land/graphNavigator",
            "js_path": "graphNavigator",
            "files": [
                "https://github.com/rock-land/graphNavigator/raw/main/graphNavigator/graphNavigator.js"
            ],
            "install_type": "copy",
            "description": "ComfyUI Web Extension for saving views and navigating graphs."
        },
        {
            "author": "diffus3",
            "title": "diffus3/ComfyUI-extensions",
            "reference": "https://github.com/diffus3/ComfyUI-extensions",
            "js_path": "diffus3",
            "files": [
                "https://github.com/diffus3/ComfyUI-extensions/raw/main/multiReroute/multireroute.js",
                "https://github.com/diffus3/ComfyUI-extensions/raw/main/setget/setget.js"
            ],
            "install_type": "copy",
            "description": "Extensions: subgraph, setget, multiReroute"
        },
        {
            "author": "m957ymj75urz",
            "title": "m957ymj75urz/ComfyUI-Custom-Nodes",
            "reference": "https://github.com/m957ymj75urz/ComfyUI-Custom-Nodes",
            "js_path": "m957ymj75urz",
            "files": [
                "https://github.com/m957ymj75urz/ComfyUI-Custom-Nodes/raw/main/clip-text-encode-split/clip_text_encode_split.py",
                "https://github.com/m957ymj75urz/ComfyUI-Custom-Nodes/raw/main/colors/colors.js"
            ],
            "install_type": "copy",
            "description": "Nodes: RawText, RawTextCLIPEncode, RawTextCombine, RawTextReplace, Extension: m957ymj75urz.colors"
        },
        {
            "author": "Bikecicle",
            "title": "Waveform Extensions",
            "reference": "https://github.com/Bikecicle/ComfyUI-Waveform-Extensions",
            "files": [
                "https://github.com/Bikecicle/ComfyUI-Waveform-Extensions/raw/main/EXT_AudioManipulation.py",
                "https://github.com/Bikecicle/ComfyUI-Waveform-Extensions/raw/main/EXT_VariationUtils.py"
            ],
            "install_type": "copy",
            "description": "Some additional audio utilites for use on top of Sample Diffusion ComfyUI Extension"
        },
        {
            "author": "dawangraoming",
            "title": "KSampler GPU",
            "reference": "https://github.com/dawangraoming/ComfyUI_ksampler_gpu",
            "files": [
                "https://github.com/dawangraoming/ComfyUI_ksampler_gpu/raw/main/ksampler_gpu.py"
            ],
            "install_type": "copy",
            "description": "KSampler is provided, based on GPU random noise"
        },
        {
            "author": "fitCorder",
            "title": "fcSuite",
            "reference": "https://github.com/fitCorder/fcSuite",
            "files": [
                "https://github.com/fitCorder/fcSuite/raw/main/fcSuite.py"
            ],
            "install_type": "copy",
            "description": "fcFloatMatic is a custom module, that when configured correctly will increment through the lines generating you loras at different strengths. The JSON file will load the config."
        },
        {
            "author": "lrzjason",
            "title": "ComfyUIJasonNode",
            "reference": "https://github.com/lrzjason/ComfyUIJasonNode",
            "files": [
                "https://github.com/lrzjason/ComfyUIJasonNode/raw/main/SDXLMixSampler.py",
                "https://github.com/lrzjason/ComfyUIJasonNode/raw/main/LatentByRatio.py",
                ""
            ],
            "install_type": "copy",
            "description": "Nodes:SDXLMixSampler, LatentByRatio"
        },
        {
            "author": "lordgasmic",
            "title": "Wildcards",
            "reference": "https://github.com/lordgasmic/ComfyUI-Wildcards",
            "files": [
                "https://github.com/lordgasmic/ComfyUI-Wildcards/raw/master/wildcards.py"
            ],
            "install_type": "copy",
            "description": "Nodes:CLIPTextEncodeWithWildcards. This wildcard node is a wildcard node that operates based on the seed."
        },
        {
            "author": "throttlekitty",
            "title": "SDXLCustomAspectRatio",
            "reference": "https://github.com/throttlekitty/SDXLCustomAspectRatio",
            "files": [
                "https://raw.githubusercontent.com/throttlekitty/SDXLCustomAspectRatio/main/SDXLAspectRatio.py"
            ],
            "install_type": "copy",
            "description": "A quick and easy ComfyUI custom node for setting SDXL-friendly aspect ratios."
        },
        {
            "author": "s1dlx",
            "title": "comfy_meh",
            "reference": "https://github.com/s1dlx/comfy_meh",
            "files": [
                "https://github.com/s1dlx/comfy_meh/raw/main/meh.py"
            ],
            "install_type": "copy",
            "description": "Advanced merging methods."
        },
        {
            "author": "tudal",
            "title": "Hakkun-ComfyUI-nodes",
            "reference": "https://github.com/tudal/Hakkun-ComfyUI-nodes",
            "files": [
                "https://github.com/tudal/Hakkun-ComfyUI-nodes/raw/main/hakkun_nodes.py"
            ],
            "install_type": "copy",
            "description": "Nodes: Prompt parser. ComfyUI extra nodes. Mostly prompt parsing."
        },
        {
            "author": "SadaleNet",
            "title": "ComfyUI A1111-like Prompt Custom Node Solution",
            "reference": "https://github.com/SadaleNet/CLIPTextEncodeA1111-ComfyUI",
            "files": [
                "https://github.com/SadaleNet/CLIPTextEncodeA1111-ComfyUI/raw/master/custom_nodes/clip_text_encoder_a1111.py"
            ],
            "install_type": "copy",
            "description": "Nodes: CLIPTextEncodeA1111, RerouteTextForCLIPTextEncodeA1111."
        },
        {
            "author": "wsippel",
            "title": "SDXLResolutionPresets",
            "reference": "https://github.com/wsippel/comfyui_ws",
            "files": [
                "https://github.com/wsippel/comfyui_ws/raw/main/sdxl_utility.py"
            ],
            "install_type": "copy",
            "description": "Nodes: SDXLResolutionPresets. Easy access to the officially supported resolutions, in both horizontal and vertical formats: 1024x1024, 1152x896, 1216x832, 1344x768, 1536x640"
        },
        {
            "author": "nicolai256",
            "title": "comfyUI_Nodes_nicolai256",
            "id": "nicoali256",
            "reference": "https://github.com/nicolai256/comfyUI_Nodes_nicolai256",
            "files": [
                "https://github.com/nicolai256/comfyUI_Nodes_nicolai256/raw/main/yugioh-presets.py"
            ],
            "install_type": "copy",
            "description": "Nodes: yugioh_Presets. by Nicolai256 inspired by throttlekitty SDXLAspectRatio"
        },
        {
            "author": "Onierous",
            "title": "QRNG_Node_ComfyUI",
            "id": "qrng",
            "reference": "https://github.com/Onierous/QRNG_Node_ComfyUI",
            "files": [
                "https://github.com/Onierous/QRNG_Node_ComfyUI/raw/main/qrng_node.py"
            ],
            "install_type": "copy",
            "description": "Nodes: QRNG Node CSV. A node that takes in an array of random numbers from the ANU QRNG API and stores them locally for generating quantum random number noise_seeds in ComfyUI"
        },
        {
            "author": "ntdviet",
            "title": "ntdviet/comfyui-ext",
            "reference": "https://github.com/ntdviet/comfyui-ext",
            "files": [
                "https://github.com/ntdviet/comfyui-ext/raw/main/custom_nodes/gcLatentTunnel/gcLatentTunnel.py"
            ],
            "install_type": "copy",
            "description": "Nodes:LatentGarbageCollector. This ComfyUI custom node flushes the GPU cache and empty cuda interprocess memory. It's helpfull for low memory environment such as the free Google Colab, especially when the workflow VAE decode latents of the size above 1500x1500."
        },
        {
            "author": "alkemann",
            "title": "alkemann nodes",
            "id": "alkemann",
            "reference": "https://gist.github.com/alkemann/7361b8eb966f29c8238fd323409efb68",
            "files": [
                "https://gist.github.com/alkemann/7361b8eb966f29c8238fd323409efb68/raw/f9605be0b38d38d3e3a2988f89248ff557010076/alkemann.py"
            ],
            "install_type": "copy",
            "description": "Nodes:Int to Text, Seed With Text, Save A1 Image."
        },
        {
            "author": "catscandrive",
            "title": "Image loader with subfolders",
            "id": "imgsubfolders",
            "reference": "https://github.com/catscandrive/comfyui-imagesubfolders",
            "files": [
                "https://github.com/catscandrive/comfyui-imagesubfolders/raw/main/loadImageWithSubfolders.py"
            ],
            "install_type": "copy",
            "description": "Adds an Image Loader node that also shows images in subfolders of the default input directory"
        },
        {
            "author": "Smuzzies",
            "title": "Chatbox Overlay node for ComfyUI",
            "id": "chatbox-overlay",
            "reference": "https://github.com/Smuzzies/comfyui_chatbox_overlay",
            "files": [
                "https://github.com/Smuzzies/comfyui_chatbox_overlay/raw/main/chatbox_overlay.py"
            ],
            "install_type": "copy",
            "description": "Nodes: Chatbox Overlay. Custom node for ComfyUI to add a text box over a processed image before save node."
        },
        {
            "author": "CaptainGrock",
            "title": "ComfyUIInvisibleWatermark",
            "id": "invisible-watermark-grock",
            "reference": "https://github.com/CaptainGrock/ComfyUIInvisibleWatermark",
            "files": [
                "https://github.com/CaptainGrock/ComfyUIInvisibleWatermark/raw/main/Invisible%20Watermark.py"
            ],
            "install_type": "copy",
            "description": "Nodes:Apply Invisible Watermark, Extract Watermark. Adds up to 12 characters encoded into an image that can be extracted."
        },
        {
            "author": "fearnworks",
            "title": "Fearnworks Custom Nodes",
            "id": "fearnworks",
            "reference": "https://github.com/fearnworks/ComfyUI_FearnworksNodes",
            "files": [
                "https://github.com/fearnworks/ComfyUI_FearnworksNodes/raw/main/fw_nodes.py"
            ],
            "install_type": "copy",
            "description": "A collection of ComfyUI nodes. These nodes are tailored for specific tasks, such as counting files in directories and sorting text segments based on token counts. Currently this is only tested on SDXL 1.0 models. An additional swich is needed to hand 1.x"
        },
        {
            "author": "LZC",
            "title": "Hayo comfyui nodes",
            "id": "lzcnodes",
            "reference": "https://github.com/1shadow1/hayo_comfyui_nodes",
            "files": [
                "https://github.com/1shadow1/hayo_comfyui_nodes/raw/main/LZCNodes.py"
            ],
            "install_type": "copy",
            "description": "Nodes:tensor_trans_pil, Make Transparent mask, MergeImages, words_generatee, load_PIL image"
        },
        {
            "author": "celsojr2013",
            "title": "ComfyUI SimpleTools Suit",
            "reference": "https://github.com/celsojr2013/comfyui_simpletools",
            "files": [
                "https://github.com/celsojr2013/comfyui_simpletools/raw/main/google_translator.py",
                "https://github.com/celsojr2013/comfyui_simpletools/raw/main/parameters.py",
                "https://github.com/celsojr2013/comfyui_simpletools/raw/main/resolution_solver.py"
            ],
            "install_type": "copy",
            "description": "Nodes:Simple Gooogle Translator Client, Simple Mustache Parameter Switcher, Simple Latent Resolution Solver."
        },
        {
            "author": "underclockeddev",
            "title": "Preview Subselection Node for ComfyUI",
            "id": "preview-subselection",
            "reference": "https://github.com/underclockeddev/ComfyUI-PreviewSubselection-Node",
            "files": [
                "https://github.com/underclockeddev/ComfyUI-PreviewSubselection-Node/raw/master/preview_subselection.py"
            ],
            "install_type": "copy",
            "description": "A node which takes in x, y, width, height, total width, and total height, in order to accurately represent the area of an image which is covered by area-based conditioning."
        },
        {
            "author": "AshMartian",
            "title": "Dir Gir",
            "id": "dir-gir",
            "reference": "https://github.com/AshMartian/ComfyUI-DirGir",
            "files": [
                "https://github.com/AshMartian/ComfyUI-DirGir/raw/main/dir_picker.py",
                "https://github.com/AshMartian/ComfyUI-DirGir/raw/main/dir_loop.py"
            ],
            "install_type": "copy",
            "description": "A collection of ComfyUI directory automation utility nodes. Directory Get It Right adds a GUI directory browser, and smart directory loop/iteration node that supports regex and file extension filtering."
        },
        {
            "author": "underclockeddev",
            "title": "BrevImage",
            "id": "brevimage",
            "reference": "https://github.com/bkunbargi/BrevImage",
            "files": [
                "https://github.com/bkunbargi/BrevImage/raw/main/BrevLoadImage.py"
            ],
            "install_type": "copy",
            "description": "Nodes:BrevImage. ComfyUI Load Image From URL"
        },
        {
            "author": "jw782cn",
            "title": "ComfyUI-Catcat",
            "id": "catcat",
            "reference": "https://github.com/jw782cn/ComfyUI-Catcat",
            "files": [
                "https://github.com/jw782cn/ComfyUI-Catcat"
            ],
            "install_type": "copy",
            "description": "Extension to show random cat GIFs while queueing prompt."
        },
        {
            "author": "xliry",
            "title": "ComfyUI_SendDiscord",
            "id": "senddiscord",
            "reference": "https://github.com/xliry/ComfyUI_SendDiscord",
            "files": [
                "https://github.com/xliry/ComfyUI_SendDiscord/raw/main/SendDiscord.py"
            ],
            "install_type": "copy",
            "description": "Nodes:Send Video to Discord"
        },
        {
            "author": "xliry",
            "title": "color2rgb",
            "reference": "https://github.com/vxinhao/color2rgb",
            "files": [
                "https://github.com/vxinhao/color2rgb/raw/main/color2rgb.py"
            ],
            "install_type": "copy",
            "description": "Nodes:color2RGB"
        },



        {
            "author": "theally",
            "title": "TheAlly's Custom Nodes",
            "id": "ally",
            "reference": "https://civitai.com/models/19625?modelVersionId=23296",
            "files": [
                "https://civitai.com/api/download/models/25114",
                "https://civitai.com/api/download/models/24679",
                "https://civitai.com/api/download/models/24154",
                "https://civitai.com/api/download/models/23884",
                "https://civitai.com/api/download/models/23649",
                "https://civitai.com/api/download/models/23467",
                "https://civitai.com/api/download/models/23296"
            ],
            "install_type": "unzip",
            "description": "Custom nodes for ComfyUI by TheAlly."
        },
        {
            "author": "xss",
            "title": "Custom Nodes by xss",
            "id": "xss",
            "reference": "https://civitai.com/models/24869/comfyui-custom-nodes-by-xss",
            "files": [
                "https://civitai.com/api/download/models/32717",
                "https://civitai.com/api/download/models/47776",
                "https://civitai.com/api/download/models/29772",
                "https://civitai.com/api/download/models/31618",
                "https://civitai.com/api/download/models/31591",
                "https://civitai.com/api/download/models/29773",
                "https://civitai.com/api/download/models/29774",
                "https://civitai.com/api/download/models/29755",
                "https://civitai.com/api/download/models/29750"
            ],
            "install_type": "unzip",
            "description": "Various image processing nodes."
        },
        {
            "author": "aimingfail",
            "title": "Image2Halftone Node for ComfyUI",
            "id": "img2halftone",
            "reference": "https://civitai.com/models/143293/image2halftone-node-for-comfyui",
            "files": [
                "https://civitai.com/api/download/models/158997"
            ],
            "install_type": "unzip",
            "description": "This is a node to convert an image into a CMYK Halftone dot image."
        }
    ]
}

const repolist = cnlist.custom_nodes


const start = 0;
const increment = 10;
const end = start + increment

for(let i = start; i<end; i++){
    console.log(repolist[i].reference)
}