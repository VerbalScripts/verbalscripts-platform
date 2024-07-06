import React from 'react';

interface SettingsTabProps {
  config: OrderConfiguration;
  setConfig: (arg0: OrderConfiguration) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function SettingsTab({ config, setConfig }: SettingsTabProps) {
  // const languages = new Map([
  //   ['English', 'en'],
  //   ['Spanish', 'es'],
  //   ['French', 'fr'],
  //   ['German', 'de'],
  //   ['Chinese (Mandarin)', 'zh-CN'],
  //   ['Japanese', 'ja'],
  //   ['Hindi', 'hi'],
  //   ['Arabic', 'ar'],
  //   ['Portuguese', 'pt'],
  //   ['Russian', 'ru'],
  //   ['Italian', 'it'],
  //   ['Korean', 'ko'],
  //   ['Bengali', 'bn'],
  //   ['Indonesian', 'id'],
  //   ['Swahili', 'sw'],
  // ]);

  const services = new Map([
    ['Legal Transcription', 'Legal Transcription'],
    [
      'Video and Audio Transcription services',
      'Video and Audio Transcription services',
    ],
    ['General Transcription', 'General Transcription'],
    ['Focus groups and Interviews', 'Focus groups and Interviews'],
    ['Medical Transcription', 'Medical Transcription'],
    [
      'Academic & Conference Transcription',
      'Academic & Conference Transcription',
    ],
  ]);

  const text_formats = new Map([
    ['Clean Verbatim', 'clean'],
    ['Full Verbatim', 'full'],
  ]);

  const turn_around_time = new Map([
    ['Less than 24hrs', 'Less_than_24hrs'],
    ['2 days', '2_days'],
    ['3 days', '3_days'],
    ['5 days', '5_days'],
  ]);

  const speakers = new Map([
    ['1-2', '1-2'],
    ['3 or more', '3+'],
  ]);

  const timestamping = new Map([
    ['Not Required', 'Not Required'],
    ['On Speaker Change', 'speaker'],
  ]);

  return (
    <section className='flex flex-col space-y-4 divide-gray-400'>
      <div className='flex flex-col  '>
        <div className='flex text-gray-600 text-md font-semibold mb-1'>
          Transcription Service
        </div>
        <div>
          <div className='block w-full'>
            <select
              id='service'
              defaultValue={config.service}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            >
              {Array.from(services.entries()).map(([service, code]) => (
                <option key={code} value={code}>
                  {service}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='flex text-gray-600 text-md font-semibold mb-1'>
          Text Format{' '}
        </div>
        <div>
          <div className='block w-full'>
            <div className='flex items-center gap-5'>
              {Array.from(text_formats.entries()).map(([label, format]) => (
                <div key={format} className='flex items-center gap-x-3'>
                  <input
                    id='text_format'
                    name='text_format'
                    defaultValue={format}
                    defaultChecked={config.text_format == format ? true : false}
                    type='radio'
                    className='h-7 w-7 border-gray-300 text-indigo-500 focus:ring-indigo-500'
                  />
                  <label
                    htmlFor={format}
                    className='block text-md font-medium leading-6 text-gray-700'
                  >
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className='flex justify-between items-center'>
        <div className='flex text-gray-600 text-md font-semibold'>
          Low-quality audio Heavy accent
        </div>
        <div>
          <div className='block w-full'>
            <div className='flex items-center gap-5'>
              {Array.from(turn_around_time.entries()).map(([label, format]) => (
                <div key={format} className='flex items-center gap-x-3'>
                  <input
                    id={format}
                    name='push-notifications'
                    type='radio'
                    className='h-7 w-7 border-gray-300 text-indigo-500 focus:ring-indigo-500'
                  />
                  <label
                    htmlFor={format}
                    className='block text-md font-medium leading-6 text-gray-700'
                  >
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}

      <div className='flex flex-col'>
        <div className='flex text-gray-600 text-md font-semibold mb-1'>
          Turn Around time
        </div>
        <div>
          <div className='block w-full'>
            <div className='flex items-center gap-5'>
              {Array.from(turn_around_time.entries()).map(
                ([label, tr_time]) => (
                  <div key={tr_time} className='flex items-center gap-x-3'>
                    <input
                      id='turn_around_time'
                      name='turn_around_time'
                      defaultChecked={
                        config.turn_around_time == tr_time ? true : false
                      }
                      defaultValue={tr_time}
                      type='radio'
                      className='h-7 w-7 border-gray-300 text-indigo-500 focus:ring-indigo-500'
                    />
                    <label
                      htmlFor={'turn_around_time'}
                      className='block text-md font-medium leading-6 text-gray-700'
                    >
                      {label}
                    </label>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col'>
        <div className='flex text-gray-600 text-md font-semibold mb-1'>
          Number of speakers
        </div>
        <div>
          <div className='block w-full'>
            <div className='flex items-center gap-5'>
              {Array.from(speakers.entries()).map(([label, speaker_size]) => (
                <div key={speaker_size} className='flex items-center gap-x-3'>
                  <input
                    id='speaker_size'
                    name='speakers'
                    type='radio'
                    defaultChecked={
                      config.speakers == speaker_size ? true : false
                    }
                    defaultValue={speaker_size}
                    className='h-7 w-7 border-gray-300 text-indigo-500 focus:ring-indigo-500'
                  />
                  <label
                    htmlFor='speaker_size'
                    className='block text-md font-medium leading-6 text-gray-700'
                  >
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col'>
        <div className='flex text-gray-600 text-md font-semibold mb-1'>
          Use Timestamps
        </div>
        <div>
          <div className='block w-full'>
            <select
              id='timestamps'
              defaultValue={config.apply_timestamps}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            >
              {Array.from(timestamping.entries()).map(([ts_opt, code]) => (
                <option key={code} value={code}>
                  {ts_opt}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
