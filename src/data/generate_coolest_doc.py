# Test script that creates a whole LensUniverse model
# emulating a series of inputs from e.g. a user interface,
# and finally write it on disk as YAML or JSON files.

from coolest.template.lazy import *
from coolest.template import info
from coolest.template.standard import COOLEST
from coolest.template.io import APISerializer

from pprint import pprint


############## LENS MODELING ################

cosmology = Cosmology(H0=70.0, Om0=0.3)

# Create a couple of source galaxies at different redshifts
galaxy = Galaxy('ex: M51', None,
                mass_model=MassModel(*info.all_supported_choices['mass_profiles']),
                light_model=LightModel(*info.all_supported_choices['light_profiles']))

ext_shear = ExternalShear('ex: main perturbers', None,
                          mass_model=MassModel('ExternalShear'))

entity_list = LensingEntityList(galaxy, ext_shear)

# Choose which likelihood terms you want to include
likelihood_list = LikelihoodList('imaging_data')

# Define the origin of the coordinates system
origin = CoordinatesOrigin('00h11m20.244s', '-08d45m51.48s')

# Provide data file
image_file = FitsFile('test_image.fits')  # if None, COOLEST mode will be automatically set to 'mock'

# Select the type of noise
from coolest.template.api import noise
noise_all_options = [getattr(noise, cls_name)() for cls_name in info.all_supported_choices['noise']]
observation = Observation(pixels=image_file, noise=noise_all_options)

# Defines the instrument
from coolest.template.api import psf
psf_all_options = [getattr(psf, cls_name)() for cls_name in info.all_supported_choices['psf']]

instrument = Instrument('ex: HST/WFC3',
                        pixel_size=0.08, 
                        band='F160W',
                        psf=psf_all_options)

# Master object for the standard
coolest = COOLEST('DOC',
                  origin,
                  entity_list,
                  observation, 
                  instrument, 
                  cosmology)
print("FINAL OBJECT\n", coolest, '\n')

sample_encoder_json = APISerializer('coolest_doc', obj=coolest, indent=2)
sample_encoder_json.json_dump_simple()
